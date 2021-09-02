const { Router } = require("express");

module.exports = function ({ MatriculaController }) {
  const router = Router();
  router.post("/crear", MatriculaController.crearMatricula);
  router.get("/consultar/:matriculaId", MatriculaController.buscarMatricula);
  router.patch("/editar/:matriculaId", MatriculaController.editarMatricula);
  router.delete("/delete/:matriculaId", MatriculaController.eliminarMatricula);
  router.get(
    "/pendientes/:desde/:hasta",
    MatriculaController.pendientesMatricula
  );
  return router;
};
