const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const { RestService } = require("../services");
//controladores
const { RestController } = require("../controllers");
//rutas
const { RestRoutes } = require("../routes/index.routes");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    RestService: asClass(RestService).singleton(),
  })
  .register({
    RestController: asClass(RestController.bind(RestController)).singleton(),
  })
  .register({
    RestRoutes: asFunction(RestRoutes).singleton(),
  });
module.exports = container;
