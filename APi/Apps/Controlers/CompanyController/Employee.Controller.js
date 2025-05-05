import {
  EmployeeVaidator,
  UpdateEmployeeVaidator,
} from "../../Validatior/Employe.Validator.js";
import { Employee } from "../../Models/EmployeModels/Employee.Models.js";

/***************************************************** */
// Employee Controlers

//  Create Employee Functions
const CreateEmployee = async (req, res) => {
  try {
    const { error, value } = EmployeeVaidator.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    // Check if exits already
    const exits = await Employee.findOne({ Name: req.body.Name });

    if (exits) {
      return res.status(422).json({
        ErrorMsg: "This UserName Is Already Exits",
        Success: false,
      });
    }

    // Distructing into Value
    const {
      Name,
      Email,
      Ph,
      Role,
      Experience,
      Department,
      EmpSallary,
      JoiningDate,
      PreviousCompanyDetails,
    } = value;

    // Create New Document
    const response = await Employee.create({
      Name,
      Email,
      Ph,
      Role,
      Experience,

      Department,
      EmpSallary,
      JoiningDate,
      PreviousCompanyDetails,
    });

    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error While Creating Employee",
        Success: false,
      });
    }

    // Return Stament
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Employee Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in CreateEmployee Controller",
      Success: false,
    });
  }
};
//  Find Employee Functions
const FindEmployee = async (req, res) => {
  try {
    const { Name } = req.params;

    // Find in Database With Name
    const exits = await Employee.findOne({ Name });

    if (!exits) {
      return res.status(422).json({
        ErrorMsg: "This UserName Is Not Exits",
        Success: false,
      });
    }

    //Return statment

    return res.status(200).json({
      Data: exits,
      Success: true,
      Msg: "Employee Find Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in FindEmployee Controller",
      Success: false,
    });
  }
};
//  Update Employee Functions
const UpdateEmployee = async (req, res) => {
  try {
    // Distructring From Body
    const { Name, Email, Ph, Role, Experience, EmpSallary, id } = req.body;
    // Joi Validation
    const { error, value } = UpdateEmployeeVaidator.validate({
      Name,
      Email,
      Ph,
      Role,
      Experience,
      EmpSallary,
    });

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    // Find by id For Match if the Name of Emoloye is Chanege or not
    const Emp = await Employee.findById(id);

    if (!Emp) {
      return res.status(404).json({
        ErrorMsg: "Employe Not Found",
        Success: false,
      });
    }
    // Create a Variable with Global Scope
    let response;
    // if Name is Not Changed execution is Pass to if block otherwise Execution is pass to else block
    if (Emp?.Name === Name) {
      response = await Employee.findByIdAndUpdate(
        id,
        {
          Name,
          Email,
          Ph,
          Role,
          Experience,
          Department: Emp?.Department,
          EmpSallary,
          JoiningDate: Emp?.JoiningDate,
          PreviousCompanyDetails: Emp?.PreviousCompanyDetails,
        },
        { new: true }
      );
    } else {
      let exits = await Employee.findOne({ Name });
      if (exits) {
        return res.status(422).json({
          ErrorMsg: "This UserName Is Already Exits",
          Success: false,
        });
      }
      response = await Employee.findByIdAndUpdate(
        id,
        {
          Name,
          Email,
          Ph,
          Role,
          Experience,

          Department: Emp?.Department,
          EmpSallary,
          JoiningDate: Emp?.JoiningDate,
          PreviousCompanyDetails: Emp?.PreviousCompanyDetails,
        },
        { new: true }
      );
    }

    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error While Creating Employee",
        Success: false,
      });
    }

    // Return stament
    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Employee Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in UpdateEmployee Controller",
      Success: false,
    });
  }
};
//  Update IsEmployee Offline or Actice Functions
const UpdateIsEmployee = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id || id?.trim() == "") {
      return res.status(422).json({
        ErrorMsg: "id is required",
        Success: false,
      });
    }

    // Find The Employe
    let Emp = await Employee.findById(id);

    if (!Emp) {
      return res.status(404).json({
        ErrorMsg: "UserName Not Found",
        Success: false,
      });
    }
    //  Find The Eployee And Update Their IsEmployee Fiels If True Then False if False Then True
    let response = await Employee.findByIdAndUpdate(
      id,
      {
        $set: { IsEmployee: Emp.IsEmployee ? false : true },
      },
      { new: true }
    );
    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error While Creating Employee",
        Success: false,
      });
    }

    //  return Statement

    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Employee Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in UpdateIsEmployee Controller",
      Success: false,
    });
  }
};

// Get All Offline Eployee
const GetOfflineEmployees = async (req, res) => {
  try {
    // Find The All Employee which have isEmployee = False
    const exits = await Employee.find({ IsEmployee: false });

    //Return statment

    return res.status(200).json({
      Data: exits,
      Success: true,
      Msg: "Employee Find Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in AllOfflineEmployee Controller",
      Success: false,
    });
  }
};
// Get All Active Employee
const GetActiceAllEmployee = async (req, res) => {
  try {
    // Find The All Employee which have isEmployee = true

    const ress = await Employee.find({ IsEmployee: true });

    //Return statment

    return res.status(200).json({
      Data: ress,
      Success: true,
      Msg: "Employee Find Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      // ErrorMsg: error,
      ErrorMsg: "Error in GetAllEmployee Controller",
      Success: false,
    });
  }
};
// Get All  Employee Active or offline
const GetAllEmployees = async (req, res) => {
  try {
    //  Find All The Employee
    const ress = await Employee.find();

    //Return statment

    return res.status(200).json({
      Data: ress,
      Success: true,
      Msg: "Employee Find Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in GetAllEmployees Controller",
      Success: false,
    });
  }
};

export {
  CreateEmployee,
  FindEmployee,
  UpdateEmployee,
  UpdateIsEmployee,
  GetOfflineEmployees,
  GetActiceAllEmployee,
  GetAllEmployees,
};
