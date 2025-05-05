import { request } from "express";
import mongoose from "mongoose";
const toppingschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Topping = mongoose.model("Topping", toppingschema);
