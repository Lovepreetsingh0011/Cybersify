import { Router } from "express";
import {
  CreateBatter,
  CreateTopping,
  GetBatterAndTopping,
  CreateCake,
  GetCake,
} from "../Controlers/CakeAppControler/CakeApp.Controler.js";
const router = Router();

//****************************************************** */
// Routes For Cake
router.route("/CreateCake").post(CreateCake);
router.route("/Getcake/:Name").get(GetCake);

//****************************************************** */
// Routes For Batter
router.route("/CreateBatter").post(CreateBatter);

//****************************************************** */
// Routes For Topping
router.route("/CreateTopping").post(CreateTopping);

router.route("/GetBatterAndtopping").get(GetBatterAndTopping);

export default router;
