const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const {NotasService} = require("../services");
//controladores
const {NotasController} = require("../controllers");
//rutas
const {NotasRoutes} = require("../routes/index.routes");


const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    NotasService: asClass(NotasService).singleton(),
  })
  .register({
    NotasController: asClass(
      NotasController.bind(NotasController)
    ).singleton(),
  })
  .register({
    NotasRoutes: asFunction(NotasRoutes).singleton(),
  })
module.exports = container;
