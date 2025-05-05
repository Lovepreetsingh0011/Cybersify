import mongoose from "mongoose";
const MonthlyLeaveschema = new mongoose.Schema(
  {
    Employeeid: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
    },
    Leaves: [
      {
        Date: {
          type: Date,
        },
        DailyTableid: {
          type: mongoose.Types.ObjectId,
          ref: "DailyTable",
        },
      },
    ],
    Sandwitch: [
      {
        Date: {
          type: Date,
        },
        DailyTableid: {
          type: mongoose.Types.ObjectId,
          ref: "DailyTable",
        },
      },
    ],
    From: {
      type: Date,
      required: true,
    },
    To: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
export const MonthlyLeaves = mongoose.model(
  "MonthlyLeaves",
  MonthlyLeaveschema
);
