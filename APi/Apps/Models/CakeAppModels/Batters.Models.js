import { request } from "express";
import mongoose from "mongoose";
const batterschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Batter = mongoose.model("Batter", batterschema);
