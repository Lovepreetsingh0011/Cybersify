import { DailyTable } from "../../Models/EmployeModels/DailyTable.Models.js";
import { Employee } from "../../Models/EmployeModels/Employee.Models.js";
import {
  DailyTableValidator,
  DailyTableRecord,
} from "../../Validatior/Employe.Validator.js";

// Add DailyTable Data
const AddDailyTableData = async (req, res) => {
  try {
    //  Joi Validation
    const { error, value } = DailyTableValidator.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    //  Destructring from the Value
    let { Employeeid, CheckIn, CheckOut, Attendence, SandWich, HasLeave } =
      value;

    // Correcting Te Dates Structure
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let day = new Date().getDate();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    let fulldate = `${year}-${month}-01T00:00:00.000Z`;
    let todaydate = `${year}-${month}-${day}T23:59:59.999Z`;

    // if Dont Have Any Leave

    if (HasLeave) {
      const Records = await DailyTable.find({
        $and: [
          { Employeeid },
          { HasLeave: true },
          { Date: { $gte: fulldate, $lte: todaydate } },
        ],
      });

      if (Records?.length >= 3) {
        return res.status(422).json({
          ErrorMsg: "You dont Have any leave more",
          Success: false,
        });
      }
    }

    // Global Variable
    let response;
    if (Attendence == false) {
      response = await DailyTable.create({
        Employeeid,
        Attendence,
        SandWich,
        HasLeave,
      });
      if (!response) {
        return res.status(500).json({
          ErrorMsg: "Internal Server Error Will Add Daily Table Data",
          Success: false,
        });
      }
    } else {
      let CheckInSplitArr = CheckIn.split(":");
      if (parseInt(CheckInSplitArr[1]) >= 1) {
        CheckIn = parseInt(CheckIn) + 1;
        CheckOut = parseInt(CheckOut);
      } else {
        CheckIn = parseInt(CheckIn);
        CheckOut = parseInt(CheckOut);
      }

      response = await DailyTable.create({
        Employeeid,
        Attendence,
        CheckIn,
        CheckOut,
        TotalHour: CheckOut - CheckIn,
      });
      if (!response) {
        return res.status(500).json({
          ErrorMsg: "Internal Server Error Will Add Daily Table Data",
          Success: false,
        });
      }
    }

    // return Statement
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Daily Data Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in AddDailyTableData Controller",
      Success: false,
    });
  }
};

// Get Daily records
const GetDailyRecords = async (req, res) => {
  try {
    const { error, value } = DailyTableRecord.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    // Destring From the value
    let { Employeeid, From, To } = value;

    // Correcting The Dates Formats
    let year = new Date(To).getFullYear();
    let month = new Date(To).getMonth();
    let day = new Date(To).getDate();
    month = month >= 10 ? month + 1 : `0${month + 1}`;
    day = day >= 10 ? day : `0${day}`;
    let CustumToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    // Find From The Database From to To
    let response = await DailyTable.find({
      $and: [{ Employeeid }, { Date: { $gte: From, $lte: CustumToDate } }],
    });

    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Recorded Not Founded",
        Success: false,
      });
    }
    // return Statement
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: " Successfully Geting DailyRecords",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ErrorMsg: "Error in GetDailyRecords Controller",
      Success: false,
    });
  }
};
// Get Daily Complete records

const GetCompleteDailyRecords = async (req, res) => {
  try {
    const { error, value } = DailyTableRecord.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    // Destructing
    let { Employeeid, From, To } = value;
    // Correcting the dates Formats
    From = new Date(From);
    let now = new Date(To);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    let CustumToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    // Create A Object for Send The as Responsee into Signle Variable
    let responseObject = {
      Employee: {},
      WorkingHour: 0,
      Absents: 0,
      SandWich: 0,
      TotalDays: 0,
      WorkingDays: 0,
    };

    // Find the Data

    let response = await DailyTable.find({
      $and: [{ Employeeid }, { Date: { $gte: From, $lte: CustumToDate } }],
    });

    if (response?.length > 0) {
      let AttendenceCount = 0;
      let SandWichCount = 0;
      let WorkingHour = 0;
      let Leavescount = 0;
      response.forEach((m) => {
        if (m.Attendence) AttendenceCount++;
        if (m.SandWich > 0) SandWichCount++;
        if (m.HasLeave) Leavescount++;
        WorkingHour += m?.TotalHour;
      });

      responseObject.WorkingDays = AttendenceCount;
      responseObject.Leaves = Leavescount;
      responseObject.SandWich = SandWichCount;
      responseObject.Absents = response?.length - AttendenceCount;
      responseObject.WorkingHour = WorkingHour;
      responseObject.TotalDays = response?.length;
    }
    // For Add Emoloyee Details
    responseObject.Employee = await Employee.findById(Employeeid);

    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Recorded Not Founded",
        Success: false,
      });
    }
    // return Statement
    return res.status(200).json({
      Data: responseObject,
      Success: true,
      Msg: " Successfully Geting DailyRecords",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in GetDailyRecords Controller",
      Success: false,
    });
  }
};
// Get Daily Leaves records
const GetLeaveRecords = async (req, res) => {
  try {
    const { error, value } = DailyTableRecord.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    let { Employeeid, From, To } = value;

    // Correcting The dates Formats
    let now = new Date(To);
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let day = now.getDate();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;

    let CustumToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    // Find the data
    let response = await DailyTable.find({
      $and: [
        { Employeeid },
        { HasLeave: true },
        { Date: { $gte: From, $lte: CustumToDate } },
      ],
    });
    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Recorded Not Founded",
        Success: false,
      });
    }
    // return Statement
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: " Successfully Geting Daily Leaves Records",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in Daily Leave Records Controller",
      Success: false,
    });
  }
};
// Get Daily Absents records
const GetAbsentsRecords = async (req, res) => {
  try {
    const { error, value } = DailyTableRecord.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    let { Employeeid, From, To } = value;
    // Correcting the dates formats
    let now = new Date(To);
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let day = now.getDate();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;

    let CustumToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    // Find The data
    let response = await DailyTable.find({
      $and: [
        { Employeeid },
        { Attendence: false },

        { Date: { $gte: From, $lte: CustumToDate } },
      ],
    });
    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Recorded Not Founded",
        Success: false,
      });
    }
    // return Statement
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: " Successfully Geting Daily Leaves Records",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in Daily Absents Records Controller",
      Success: false,
    });
  }
};
export {
  AddDailyTableData,
  GetDailyRecords,
  GetCompleteDailyRecords,
  GetLeaveRecords,
  GetAbsentsRecords,
};
