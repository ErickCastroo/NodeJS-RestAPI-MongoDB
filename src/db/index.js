import mongoose from "mongoose";
import { uri } from "../server/config.js";

const connect = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("Database is connected to: " + db.connection.name);
  } catch (error) {
    console.log("Error en la coneccion: " + error)
  }
};

connect();
