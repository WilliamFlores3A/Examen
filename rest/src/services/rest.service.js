const axios = require("axios").default;
class RestService {
  _moverPendientes(req, res) {
    const desde = req.params.desde;
    const hasta = req.params.hasta;
    axios
      .get(
        `http://localhost:3000/v1/api/matriculas/pendientes/${desde}/${hasta}`
      )
      .then((resp) => {
        if (resp.statusCode == 404 || resp.statusCode == 500) {
          return res.status(400).json({
            mensaje:
              "No se encontraron matriculas entre esas fechas o con el estado pendiente",
          });
        } else {
          const matriculas = resp.data;
          console.log(matriculas);
          matriculas.forEach((matricula) => {
            const nota = {
              identificacion: matricula.identificacion,
              nombre: matricula.nombre,
              curso: matricula.curso,
              horario: matricula.horario,
              fecha: matricula.fecha,
              notaPractica: "pendiente",
              notaTeoria: "pendiente",
              promedio: "pendiente",
            };
            console.log("hola" + nota);
            axios
              .post("http://localhost:3001/v1/api/notas/crear", nota)
              .then((res) => {
                return res.status(200).send("Agregadas");
              })
              .catch((err) => {
                return res.status(404).send("Error al agregar");
              });
          });
        }
      });
  }
}
module.exports = RestService;
