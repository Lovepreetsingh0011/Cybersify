import mongoose from "mongoose";
const Cakeschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Batter: {
      type: mongoose.Types.ObjectId,
      ref: "Batter",
    },

    Topping: {
      type: mongoose.Types.ObjectId,
      ref: "Topping",
    },
  },
  { timestamps: true }
);
export const Cake = mongoose.model("Cake", Cakeschema);
