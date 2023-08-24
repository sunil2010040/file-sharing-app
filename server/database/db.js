import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGO_URI =
    "mongodb+srv://USER:USER1234@cluster0.frursa0.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
