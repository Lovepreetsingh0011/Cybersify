import { Router } from "express";
import {
  CreateEmployee,
  FindEmployee,
  UpdateEmployee,
  UpdateIsEmployee,
  GetOfflineEmployees,
  GetActiceAllEmployee,
  GetAllEmployees,
} from "../../Controlers/CompanyController/Employee.Controller.js";
import {
  AddDailyTableData,
  GetDailyRecords,
  GetCompleteDailyRecords,
  GetLeaveRecords,
  GetAbsentsRecords,
} from "../../Controlers/CompanyController/DailyTable.Controller.js";
import {
  AddMonthlyTableData,
  GetMonthlyRecords,
} from "../../Controlers/CompanyController/MonthlyTable.Controller.js";
import { GetOfficeRecord } from "../../Controlers/CompanyController/Office.Controller.js";
const router = Router();

router.route("/CreateEmployee").post(CreateEmployee);
router.route("/GetEmployee/:Name").get(FindEmployee);
router.route("/UpdateEmployee").put(UpdateEmployee);
router.route("/UpdateIsEmployee").patch(UpdateIsEmployee);
router.route("/GetOfflineEmployees").get(GetOfflineEmployees);
router.route("/GetActiceAllEmployee").get(GetActiceAllEmployee);
router.route("/GetAllEmployees").get(GetAllEmployees);

// *******************************************************
//    DAILY DATA TABLE
router.route("/AddDailyData").post(AddDailyTableData);
router.route("/GetDailyRecords").post(GetDailyRecords);
router.route("/GetCompleteDailyRecords").post(GetCompleteDailyRecords);
router.route("/GetDailyLeaveRecords").post(GetLeaveRecords);
router.route("/GetAbsentsRecords").post(GetAbsentsRecords);

// *******************************************************
//    MONTHLY DATA TABLE

router.route("/AddMonthlyRecord").post(AddMonthlyTableData);
router.route("/GetMonthlyRecords/:EmployeeName").get(GetMonthlyRecords);

// *******************************************************
//    OFFICE RECORDS
router.route("/GetOfficeRecord").post(GetOfficeRecord);

export default router;
