const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotasSchema = new Schema({
  identificacion: { type: String },
  nombre: { type: String },
  curso: { type: String },
  horario: { type: String },
  fecha: { type: Date },
  notaPractica: { type: String },
  notaTeoria: { type: String },
  promedio: { type: String },
});

module.exports = mongoose.model("Notas", NotasSchema);
