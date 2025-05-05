import { Batter } from "../../Models/CakeAppModels/Batters.Models.js";
import { Topping } from "../../Models/CakeAppModels/Topping.Models.js";
import { Cake } from "../../Models/CakeAppModels/Cake.Models.js";
import {
  BatterValidator,
  ToppingValidator,
  CakeValidor,
} from "../../Validatior/CakeApp.Validator.js";
// ***************************************************

// const schema = Joi.object({
//   Name: Joi.string().required(),
//   batterid: Joi.string().required(),
//   toppingid: Joi.string().required(),
// });

// ***************************************************
// Cake Functions
const CreateCake = async (req, res) => {
  try {
    const { error, value } = Cake.validate(req.body);

    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }

    const { Name, batterid, toppingid } = value;

    const response = await Cake.create({
      Name,
      Batter: batterid,
      Topping: toppingid,
    });

    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error While Creating Cake",
        Success: false,
      });
    }

    return res.status(200).json({
      Data: response,
      Success: true,
      Msg: "Cake Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ErrorMsg: "Error in CreateCake Controller",
      Success: false,
    });
  }
};

// For Get Cake
const GetCake = async (req, res) => {
  try {
    const { Name } = req.params;

    // if (!Name) {
    //   return res.status(404).json({
    //     ErrorMsg: " Name Not Found",
    //     Success: false,
    //   });
    // }

    const { error, value } = schema.validate({ Name });
    if (error) {
      return res.status(422).json({
        ErrorMsg: error?.details[0]?.message,
        Success: false,
      });
    }
    const response = await Cake.findOne({ Name }).populate("Batter Topping");
    //   .populate("Topping");

    if (!response) {
      return res.status(404).json({
        ErrorMsg: " Cake Not Found",
        Success: false,
      });
    }
    //  Return  Statement
    return res.status(200).json({
      Data: { response },
      Success: true,
      Msg: "Successfully Found cake",
    });
  } catch (error) {
    return res.status(404).json({
      ErrorMsg: "Error in GetBatterAndTopping Controler",
      Success: false,
    });
  }
};

// ***************************************************
// ALL Batter Function

// Create Batter  Controller

const CreateBatter = async (req, res) => {
  try {
    const { Name } = req.body;
    if (!Name || Name?.trim() == "") {
      return res
        .status(422)
        .json({ ErrorMsg: "Name is Required", Success: false });
    }

    let response = await Batter.create({ Name });
    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error Will Create Batter",
        Success: false,
      });
    }

    //  Return  Statement
    return res.status(200).json({ Data: response, Success: true });
  } catch (error) {
    return res
      .status(404)
      .json({ ErrorMsg: "Error in CreateCake Controler", Success: false });
  }
};

// Get Batter And  Topping
const GetBatterAndTopping = async (req, res) => {
  try {
    let BatterRes = await Batter.find().select(
      "-_id -createdAt -updatedAt -__v"
    );
    let ToppingRes = await Topping.find().select(
      "-_id -createdAt -updatedAt -__v"
    );

    if (!BatterRes) {
      return res.status(404).json({
        ErrorMsg: " Batter Not Found",
        Success: false,
      });
    }

    if (!ToppingRes) {
      return res.status(404).json({
        ErrorMsg: " ToppingRes Not Found",
        Success: false,
      });
    }

    //  Return  Statement
    return res
      .status(200)
      .json({ Data: { BatterRes, ToppingRes }, Success: true });
  } catch (error) {
    return res.status(404).json({
      ErrorMsg: "Error in GetBatterAndTopping Controler",
      Success: false,
    });
  }
};

// ***************************************************
// ALL Topping Function

// Create Tooping Function

const CreateTopping = async (req, res) => {
  try {
    const { Name } = req.body;
    if (!Name || Name?.trim() == "") {
      return res
        .status(422)
        .json({ ErrorMsg: "Name is Required", Success: false });
    }

    let response = await Topping.create({ Name });
    if (!response) {
      return res.status(500).json({
        ErrorMsg: "Internal Server Error Will Create Topping",
        Success: false,
      });
    }

    //  Return  Statement
    return res.status(200).json({ Data: response, Success: true });
  } catch (error) {
    return res
      .status(404)
      .json({ ErrorMsg: "Error in CreateCake Controler", Success: false });
  }
};
export {
  CreateBatter,
  CreateTopping,
  GetBatterAndTopping,
  CreateCake,
  GetCake,
};
