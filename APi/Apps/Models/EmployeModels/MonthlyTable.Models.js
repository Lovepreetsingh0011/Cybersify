import mongoose from "mongoose";
const MonthlyTablechema = new mongoose.Schema(
  {
    Sallary: {
      type: Number,
      required: true,
    },

    TotalLeaves: {
      type: Number,
      required: true,
    },
    TotalSandwich: {
      type: Number,
    },
    FinalSallary: {
      type: Number,
      required: true,
    },

    Employeeid: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
    },
    WorkingDays: {
      type: Number,
      required: true,
    },
    TotalDays: {
      type: Number,
      required: true,
    },
    WorkingHour: {
      type: Number,
      required: true,
    },
    TotalCuttoff: {
      type: Number,
      required: true,
    },
    AbsentsCuttoff: {
      type: Number,
      required: true,
    },
    SandWichCuttoff: {
      type: Number,
      required: true,
    },
    LeaveRelief: {
      type: Number,
    },
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
export const MonthlyTable = mongoose.model("MonthlyTable", MonthlyTablechema);
