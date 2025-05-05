import mongoose from "mongoose";
const Empchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },

    Role: {
      type: String,
      required: true,
    },
    Experience: {
      type: Number,
      default: 0,
    },
    IsEmployee: {
      type: Boolean,
      default: true,
    },
    PreviousCompanyDetails: [
      {
        CompanyName: {
          type: String,
        },
        WorkExperience: {
          type: Number,
        },
        LastSallary: {
          type: Number,
        },
      },
    ],

    Department: {
      type: String,
      enum: ["Developer", "BDE", "HR", "Sale"],
    },
    Email: {
      type: String,
      required: true,
    },
    Ph: {
      type: Number,
      required: true,
    },
    JoiningDate: {
      type: Date,
    },
    EmpSallary: {
      type: Number,
    },
  },
  { timestamps: true }
);
export const Employee = mongoose.model("Employee", Empchema);
