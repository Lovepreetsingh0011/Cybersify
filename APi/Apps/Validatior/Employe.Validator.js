import Joi from "joi";

const Name = Joi.string().required().label("Name");
const Email = Joi.string().email().required().label("Email");
const Ph = Joi.number().required().label("Ph");
const Role = Joi.string().required().label("Role");
const Experience = Joi.number().label("experience");
const Department = Joi.string().required().label("Department");
const JoiningDate = Joi.date().required().label("JoiningDate");
const EmpSallary = Joi.number().required().label("EmpSallary");

const sallary = Joi.number().required().label("sallary");
const Leaves = Joi.number().label("Leaves");
const Employeeid = Joi.string().required().label("Empoyeeid");
const From = Joi.date().required().label("From").max(new Date());
const To = Joi.date().required().label("To").max(new Date());
// const To = Joi.date().required().label("To").max(new Date());
const TottalDays = Joi.number().required().label("TottalDays");

const EmployeeVaidator = Joi.object({
  Name,
  Email,
  Ph,
  Role,
  Experience,
  PreviousCompanyDetails: Joi.array().items(
    Joi.object({
      CompanyName: Joi.string(),
      WorkExperience: Joi.number(),
      LastSallary: Joi.number(),
    })
  ),
  Department,
  EmpSallary,
  JoiningDate,
});
const UpdateEmployeeVaidator = Joi.object({
  Name,
  Email,
  Ph,
  Role,
  Experience,

  EmpSallary,
});

const DailyTableValidator = Joi.object({
  Employeeid,
  CheckIn: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
  CheckOut: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
  Attendence: Joi.bool().required(),
  SandWich: Joi.number().max(1),
  HasLeave: Joi.bool(),
});
const DailyTableRecord = Joi.object({
  Employeeid,
  From,
  To,
});
const OfficeValidation = Joi.object({
  From,
  To,
});

export {
  EmployeeVaidator,
  DailyTableValidator,
  DailyTableRecord,
  UpdateEmployeeVaidator,
  OfficeValidation,
};
