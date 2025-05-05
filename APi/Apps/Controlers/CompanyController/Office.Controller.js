import { MonthlyTable } from "../../Models/EmployeModels/MonthlyTable.Models.js";
import { OfficeValidation } from "../../Validatior/Employe.Validator.js";

// TO Get Office Recods
const GetOfficeRecord = async (req, res) => {
  try {
    const { error, value } = OfficeValidation.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }

    const { From, To } = value;

    // Formatings The dates Formats
    let now = new Date(To);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    let CustomToDate = `${year}-${month}-${day}T23:59:59.999Z`;

    //  Find in database
    const response = await MonthlyTable.find({
      $and: [{ From: { $gte: From }, To: { $lte: CustomToDate } }],
    }).populate("Employeeid");

    if (!response) {
      return res.status(404).json({
        ErrorMsg: "Error Will Get find Record",
        Success: false,
      });
    }

    // if Response Leaght is Less Than 0
    if (response?.length < 0) {
      return res.status(404).json({
        ErrorMsg: "Records Not Found",
        Success: false,
      });
    }

    // Creating a variable for Sending Response
    let TotalPay = 0;
    let WorkingHour = 0;
    let CuttOff = 0;

    // For DepartMents Details
    let Developer_Departement = {
      TotalEmployee: 0,
      TotalHour: 0,
      TotalPay: 0,
    };
    let Hr_Departement = {
      TotalEmployee: 0,
      TotalHour: 0,
      TotalPay: 0,
    };

    let Sale_Departement = {
      TotalEmployee: 0,
      TotalHour: 0,
      TotalPay: 0,
    };
    let BdE_Departement = {
      TotalEmployee: 0,
      TotalHour: 0,
      TotalPay: 0,
    };

    // Calucalation for Creating Response
    response.forEach((m) => {
      TotalPay += m?.FinalSallary;
      WorkingHour += m?.WorkingHour;
      CuttOff += m?.TotalCuttoff;
      if (m?.Employeeid?.Department === "Developer") {
        Developer_Departement.TotalEmployee++;
        Developer_Departement.TotalPay += m?.FinalSallary;
        Developer_Departement.TotalHour += m?.WorkingHour;
      }
      if (m?.Employeeid?.Department === "HR") {
        Hr_Departement.TotalEmployee++;
        Hr_Departement.TotalPay += m?.FinalSallary;
        Hr_Departement.TotalHour += m?.WorkingHour;
      }
      if (m?.Employeeid?.Department === "Sale") {
        Sale_Departement.TotalEmployee++;
        Sale_Departement.TotalPay += m?.FinalSallary;
        Sale_Departement.TotalHour += m?.WorkingHour;
      }
      if (m?.Employeeid?.Department === "BDE") {
        BdE_Departement.TotalEmployee++;
        BdE_Departement.TotalPay += m?.FinalSallary;
        BdE_Departement.TotalHour += m?.WorkingHour;
      }
    });

    // Return Satement
    return res.status(200).json({
      Data: {
        TotalPay,
        WorkingHour,
        CuttOff,
        Developer_Departement,
        Hr_Departement,
        Sale_Departement,
        BdE_Departement,
      },
      Msg: "Records Found Successfully ",
      Success: true,
    });
  } catch (error) {
    return res.status(500).json({
      //   ErrorMsg: error,
      ErrorMsg: "Error in Add GetOfficeRecord  Controller",
      Success: false,
    });
  }
};

export { GetOfficeRecord };
