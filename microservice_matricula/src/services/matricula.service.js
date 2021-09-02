const { Matriculas } = require("../models");
const { mongo } = require("mongoose");

class MatriculaService {
  crear(req, res) {
    const datos = req.body;
    const matricula = {
      indentificacion: datos.indentificacion,
      nombre: datos.nombre,
      curso: datos.curso,
      horario: datos.horario,
      fecha: datos.fecha,
      estado: datos.estado,
    };
    try {
      Matriculas.create(matricula, function (err) {
        if (err) {
          return res.status(500).send("Error al buscar al crear matricula");
        } else {
          return res.status(200).send("Matricula creada");
        }
      });
    } catch (err) {
      return res.status(500).json({ message: "Error al crear el matricula" });
    }
  }

  editar(req, res) {
    const datos = req.body;
    try {
      Matriculas.findOneAndUpdate(
        { _id: mongo.ObjectId(req.params.matriculaId) },
        {
          $set: datos,
        },
        function (err, matriculaActualizado) {
          if (err) {
            return res.status(500).send("Error al actualizar la matricula");
          }
          if (!matriculaActualizado) {
            return res.status(404).send("matricula no encontrado");
          } else {
            return res.status(200).send("matricula actualizada");
          }
        }
      );
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error al actualizar la matricula" });
    }
  }

  buscar(req, res) {
    try {
      Matriculas.findOne(
        { _id: mongo.ObjectId(req.params.matriculaId) },
        function (err, matriculaBuscada) {
          if (err) {
            return res.status(500).send("Error al realizar busqueda");
          }

          if (!matriculaBuscada) {
            return res.status(404).send("matricula no encontrada");
          } else {
            return res.status(200).send(matriculaBuscada);
          }
        }
      );
    } catch (err) {
      return res.status(500).send("Error al obtener el matricula");
    }
  }

  eliminar(req, res) {
    try {
      Matriculas.deleteOne(
        { _id: mongo.ObjectId(req.params.matriculaId) },
        function (err) {
          if (err) {
            return res.status(500).send("Error al realizar busqueda");
          } else {
            return res.status(200).send("matricula eliminada");
          }
        }
      );
    } catch (err) {
      return res.status(500).send("Error al obtener el matricula");
    }
  }

  pendientes(req, res) {
    const desde = new Date(req.params.desde);
    const hasta = new Date(req.params.hasta);
    console.log(desde);
    console.log(hasta);
    try {
      Matriculas.find(
        { estado: "pendiente", fecha: { $gte: desde, $lt: hasta } },
        function (err, matriculas) {
          if (err) {
            return res.status(500).send("Error al realizar busqueda");
          }

          if (!matriculas) {
            return res.status(404).send("matriculas no encontradas");
          } else {
            return res.status(200).send(matriculas);
          }
        }
      );
    } catch (err) {
      return res.status(500).send("Error al obtener las matriculas");
    }
  }
}
module.exports = MatriculaService;
