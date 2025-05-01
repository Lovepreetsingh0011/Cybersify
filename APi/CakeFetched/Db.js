import mongoose from "mongoose";

// DataBase Connection
export const DbConnection = async () => {
  try {
    let res = await mongoose.connect(
      "mongodb+srv://lovepreetsingh:lovepreetsingh@cluster0.xi7vsv8.mongodb.net/"
    );

    if (!res) {
      console.log("DataBase Connection Error");
    } else {
      console.log("Database Connect Successfully");
    }
  } catch (error) {
    console.log("Error Will DataBase Conection");
  }
};
