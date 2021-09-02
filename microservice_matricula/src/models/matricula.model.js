const mongoose = require("mongoose");
const { Schema } = mongoose;

const MatriculaSchema = new Schema({
  indentificacion: { type: String },
  nombre: { type: String },
  curso: { type: String },
  horario: { type: String },
  fecha: { type: Date },
  estado: { type: String },
});

module.exports = mongoose.model("Matriculas", MatriculaSchema);
