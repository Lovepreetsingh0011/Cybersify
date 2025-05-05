import mongoose from "mongoose";

// DataBase Connection
export const DbConnection = async () => {
  try {
    // CakeAPP
    // let res = await mongoose.connect(
    //   "mongodb+srv://lovepreetsingh:lovepreetsingh@cluster0.xi7vsv8.mongodb.net/"
    // );
    // EpmloyeAPp
    let res = await mongoose.connect(
      "mongodb+srv://Lovepreetsingh:Lovepreetsingh@cluster0.tjvteag.mongodb.net/"
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
