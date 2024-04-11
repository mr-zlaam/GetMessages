import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database is Already connected!");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Database is Connected!");
  } catch (error: any) {
    console.log("Database Connection failed", error.message);

    process.exit();
    console.log(error);
  }
}
export default dbConnect;
