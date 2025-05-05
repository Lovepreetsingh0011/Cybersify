import express from "express";
import { ToppingSample, BatterSample } from "./Sample.js";
import cors from "cors";
import { DbConnection } from "./Db.js";
import Cakeroutes from "./Routes/CakeApp.Route.js";
import Employeeroutes from "./Routes/CompanyRoutes/Company.Routes.js";
const app = express();

app.use(express.json());
// Connection establish
DbConnection().then(() => {
  app.listen(3000, () => {
    console.log("App is Run");
  });
});

app.get("/", (req, res) => {
  res.send("woking");
});

// Routes Configue
app.use("/CakeApp", Cakeroutes);
app.use("/Employee", Employeeroutes);
