const { Notas } = require("../models");
const { mongo } = require("mongoose");

class NotasService {
  crear(req, res) {
    const datos = req.body;
    const nota = {
      identificacion: datos.identificacion,
      nombre: datos.nombre,
      curso: datos.curso,
      horario: datos.horario,
      fecha: datos.fecha,
      notaPractica: datos.notaPractica,
      notaTeoria: datos.notaTeoria,
      promedio: datos.promedio,
    };
    try {
      Notas.create(nota, function (err) {
        if (err) {
          return res.status(500).send("Error al buscar al crear nota");
        } else {
          return res.status(200).send("nota creada");
        }
      });
    } catch (err) {
      return res.status(500).json({ message: "Error al crear el nota" });
    }
  }

  editar(req, res) {
    const datos = req.body;
    try {
      Notas.findOneAndUpdate(
        { _id: mongo.ObjectId(req.params.notaId) },
        {
          $set: datos,
        },
        function (err, notaActualizado) {
          if (err) {
            return res.status(500).send("Error al actualizar la nota");
          }
          if (!notaActualizado) {
            return res.status(404).send("nota no encontrado");
          } else {
            return res.status(200).send("nota actualizada");
          }
        }
      );
    } catch (err) {
      return res.status(500).json({ message: "Error al actualizar la nota" });
    }
  }

  buscar(req, res) {
    try {
      Notas.findOne(
        { _id: mongo.ObjectId(req.params.notaId) },
        function (err, notaBuscada) {
          if (err) {
            return res.status(500).send("Error al realizar busqueda");
          }

          if (!notaBuscada) {
            return res.status(404).send("nota no encontrada");
          } else {
            return res.status(200).send(notaBuscada);
          }
        }
      );
    } catch (err) {
      return res.status(500).send("Error al obtener el nota");
    }
  }

  eliminar(req, res) {
    try {
      Notas.deleteOne(
        { _id: mongo.ObjectId(req.params.notaId) },
        function (err) {
          if (err) {
            return res.status(500).send("Error al realizar busqueda");
          } else {
            return res.status(200).send("nota eliminada");
          }
        }
      );
    } catch (err) {
      return res.status(500).send("Error al obtener el nota");
    }
  }
}
module.exports = NotasService;
