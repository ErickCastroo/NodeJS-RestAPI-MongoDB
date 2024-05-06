import express from "express";
import "../db/index.js";
import cors from "cors";
import morgan from "morgan";
import { router } from "../routes/index.routes.js";
import { puerto } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/tareas", router);

app.listen(puerto, () => {
  console.log(`El servidor esta corriendo en: http://localhost:${puerto}`);
});
