import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'
const tareasSchema = new Schema(
  {
    titulo: { type: String, required: true, trim: true },

    descripcion: { type: String, trim: true },

    estado: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  });

  // Paginación
tareasSchema.plugin(mongoosePaginate);

export default model("Tareas", tareasSchema);
