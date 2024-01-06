import express from "express";
import cros from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./route.js";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cros());

// Listen to the server
app.use("/", router);
const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT);
  console.log(`Listening to the port ${PORT}`);
} catch (error) {
  console.log("Error in index , failed while listening to the server");
}

try {
  await mongoose.connect(process.env.DB_URL);
  console.log(`connected to the database successfully`);
} catch (error) {
  console.log(`Error while connecting to the database, error : ${error}`);
}

export default app;
