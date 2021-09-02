const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const {MatriculaService} = require("../services");
//controladores
const { MatriculaController} = require("../controllers");
//rutas
const { MatriculaRoutes } = require("../routes/index.routes");


const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    MatriculaService: asClass(MatriculaService).singleton(),
  })
  .register({
    MatriculaController: asClass(
      MatriculaController.bind(MatriculaController)
    ).singleton(),
  })
  .register({
    MatriculaRoutes: asFunction(MatriculaRoutes).singleton(),
  })
module.exports = container;
