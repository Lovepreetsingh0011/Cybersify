import mongoose from "mongoose";
const DailytableSchema = new mongoose.Schema(
  {
    Employeeid: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
    },
    Date: {
      type: Date,
      default: Date.now(),
    },
    CheckIn: {
      type: String,
      default: "0",
    },

    CheckOut: {
      type: String,
      default: "0",
    },
    HasLeave: {
      type: Boolean,
      default: false,
    },
    TotalHour: {
      type: Number,
      default: 0,
    },
    Attendence: {
      type: Boolean,
      default: true,
    },
    SandWich: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export const DailyTable = mongoose.model("DailyTable", DailytableSchema);
