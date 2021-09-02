const { Router } = require("express");

module.exports = function ({ NotasController }) {
  const router = Router();
  router.post("/crear", NotasController.crearNota);
  router.get("/consultar/:notaId", NotasController.buscarNota);
  router.patch("/editar/:notaId", NotasController.editarNota);
  router.delete("/delete/:notaId", NotasController.eliminarNota);
  return router;
};
