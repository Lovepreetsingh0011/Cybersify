import mongoose from "mongoose";
const OfficeSchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      default: "CyberSify",
    },
    TotalEmployes: [
      {
        Employeeid: {
          type: mongoose.Types.ObjectId,
          ref: "Employee",
        },
      },
    ],

    CompanyPh: {
      type: Number,
      default: 12292929,
    },
  },
  { timestamps: true }
);
export const Office = mongoose.model("Office", OfficeSchema);
