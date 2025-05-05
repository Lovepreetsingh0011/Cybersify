import { DailyTable } from "../../Models/EmployeModels/DailyTable.Models.js";
import { Employee } from "../../Models/EmployeModels/Employee.Models.js";
import { MonthlyTable } from "../../Models/EmployeModels/MonthlyTable.Models.js";
import { DailyTableRecord } from "../../Validatior/Employe.Validator.js";

// Add Monthly Record
const AddMonthlyTableData = async (req, res) => {
  try {
    const { error, value } = DailyTableRecord.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }

    let { Employeeid, From, To } = value;
    // Correctings the Dates Formats
    let now = new Date(To);
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let day = now.getDate();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;

    let CustumToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    //  creating a variables for Sending Response
    let AttendenceCount = 0;
    let SandWichCount = 0;
    let WorkingHour = 0;
    let Leavescount = 0;
    let Absents = 0;
    let EmployeeDetails = {};

    let response = await DailyTable.find({
      $and: [{ Employeeid }, { Date: { $gte: From, $lte: CustumToDate } }],
    });

    if (response?.length > 0) {
      response.forEach((m) => {
        if (m.Attendence) AttendenceCount++;
        if (m.SandWich > 0) SandWichCount++;
        if (m.HasLeave) Leavescount++;
        WorkingHour += m?.TotalHour;
      });

      Absents = response?.length - AttendenceCount;
    }

    //  For Adding Employee Details
    EmployeeDetails = await Employee.findById(Employeeid);

    let perdaySallary = EmployeeDetails?.EmpSallary / 30;
    let SandWichCuttoff = 0;
    let AbsentsCuttoff = 0;
    let LeaveRelief = 0;
    let TotalCuttoff = 0;
    let FinalSallary = 0;

    // Calculation
    if (SandWichCount >= 2) {
      let sandwichcount = SandWichCount - 1;
      sandwichcount * 3;
      SandWichCuttoff = perdaySallary * sandwichcount;
    }
    AbsentsCuttoff = perdaySallary * Absents;
    LeaveRelief = perdaySallary * Leavescount;
    TotalCuttoff = SandWichCuttoff + AbsentsCuttoff;
    TotalCuttoff = TotalCuttoff - LeaveRelief;
    FinalSallary = response?.length * perdaySallary;
    FinalSallary = FinalSallary - TotalCuttoff;

    // Add in Database

    let responseData = await MonthlyTable.create({
      Sallary: EmployeeDetails?.EmpSallary,
      TotalLeaves: Leavescount,
      TotalSandwich: SandWichCount,
      FinalSallary,
      LeaveRelief,
      Employeeid,
      WorkingDays: AttendenceCount,
      WorkingHour: WorkingHour,
      TotalCuttoff,
      TotalDays: response?.length,
      AbsentsCuttoff,
      SandWichCuttoff,
      From,
      To,
    });
    // return Statement
    return res.status(200).json({
      Data: responseData,
      Success: true,
      Msg: "Daily Data Added Successfully",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      //   ErrorMsg: error,
      ErrorMsg: "Error in Add MonthlyTable Data Controller",
      Success: false,
    });
  }
};

// Find All Records of Employee
const GetMonthlyRecords = async (req, res) => {
  try {
    const { EmployeeName } = req.params;
    // Find The Single Records With Name To Get The Employee id
    let employe = await Employee.findOne({ Name: EmployeeName });

    if (!employe) {
      return res.status(404).json({
        ErrorMsg: "Employee Not Found",
        Success: false,
      });
    }

    // Find The Eployeee details with Employe id
    let response = await MonthlyTable.find({
      Employeeid: employe?._id,
    });

    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Records Not Found",
        Success: false,
      });
    }
    // return Statement
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Records Found Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      //   ErrorMsg: error,
      ErrorMsg: "Error in Add GetMonthlyRecords  Controller",
      Success: false,
    });
  }
};

export { AddMonthlyTableData, GetMonthlyRecords };
