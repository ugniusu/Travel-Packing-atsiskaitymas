import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`Connected to DB ${connecting.connection.host}`);
  } catch (error) {
    console.error("Can't connect", error);
  }
};

module.exports = connectToDB;
