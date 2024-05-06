import { Router } from "express";
import {
  ObtenerTareas,
  CrearTarea,
  ObtenerTareaPorId,
  ActualizarTarea,
  EliminarTarea,
  TareasHechas,
  TareasPendientes,
} from "../controllers/tareasCRUD.controller.js";

const router = Router();

//get
router.get("/", ObtenerTareas);
//_____________________________________

//post
router.post("/", CrearTarea);
//_____________________________________

//get estado true
router.get("/hechas", TareasHechas);
//_____________________________________

//get estado false
router.get("/pendientes", TareasPendientes);
//_____________________________________

//get by id
router.get("/:id", ObtenerTareaPorId);
//_____________________________________

//put
router.put("/:id", ActualizarTarea);
//_____________________________________

//delete
router.delete("/:id", EliminarTarea);
//_____________________________________


export { router };
