//importar el modelo de tareas
import Tareas from "../models/tareas.js";
import {getPaginacion} from "../libs/getpaginacion.js";


//_________________________________________________
export const ObtenerTareas = async (req, res) => {
  try {
    const { size, page } = req.query;
    const {limit, offset} = getPaginacion(page, size);
    
    const tareas = await Tareas.paginate( {}, { limit, offset });
    res.json(tareas);

  } catch (error) {
    res.json("error al obtener las tareas" + error);
  }
};

//________________________________________________
export const ObtenerTareaPorId = async (req, res) => {
  try {
  console.log(req.params.id);
  const tarea = await Tareas.findById(req.params.id)
  res.json(tarea);
  }
  catch (error) {
    res.json("error al obtener la tarea" + error);
  }
};

//_________________________________________________
export const CrearTarea = async (req, res) => {
  try {
  const tareaNueva = new Tareas({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    estado: req.body.estado || false,
  });
  const tareaGuardada = await tareaNueva.save();
  res.json("tarea guardada" + tareaGuardada);
  }
  catch (error) {
    res.json("error al guardar la tarea" + error);
  }
};

//_________________________________________________
export const ActualizarTarea = async (req, res) => {
  try {
  const actualizarTarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Tarea actualizada con éxito", tarea: actualizarTarea });
  }
  catch (error) {
    res.json("error al actualizar la tarea" + error);
  }
};

//_________________________________________________
export const EliminarTarea = async (req, res) => {
  try {
  const deleteTarea = await Tareas.findByIdAndDelete(req.params.id);
  res.json("tarea eliminada con exito" + deleteTarea);
  }
  catch (error) {
    res.json("error al eliminar la tarea" + error);
  }
};













//_______________ESTADO TRUE _______________________ 

export const TareasHechas = async (req, res) => {
  const tareas = await Tareas.find({ estado: true })
  res.json(tareas);
}

//_______________ESTADO FALSE _______________________ 

export const TareasPendientes = async (req, res) => {
  const tareas = await Tareas.find({ estado: false })
  res.json(tareas);
}