let _matriculaService = null;
class MatriculaController {
  constructor({ MatriculaService }) {
    _matriculaService = MatriculaService;
  }
  crearMatricula(req, res) {
    return _matriculaService.crear(req, res);
  }
  editarMatricula(req, res) {
    return _matriculaService.editar(req, res);
  }
  buscarMatricula(req, res) {
    return _matriculaService.buscar(req, res);
  }
  eliminarMatricula(req, res) {
    return _matriculaService.eliminar(req, res);
  }
  pendientesMatricula(req, res) {
    return _matriculaService.pendientes(req, res);
  }
}

module.exports = MatriculaController;
