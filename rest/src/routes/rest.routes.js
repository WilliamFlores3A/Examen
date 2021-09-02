const { Router } = require("express");

module.exports = function ({ RestController }) {
  const router = Router();
  router.get("/moverPendientes/:desde/:hasta", RestController.moverPendientes);
  return router;
};
