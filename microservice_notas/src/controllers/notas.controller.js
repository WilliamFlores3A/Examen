let _notasService = null;
class NotasController {
	constructor({ NotasService }) {
		_notasService = NotasService;
	}
	crearNota(req, res) {
		return _notasService.crear(req, res);
	}
	editarNota(req, res) {
		return _notasService.editar(req, res);
	}
	buscarNota(req, res) {
		return _notasService.buscar(req, res);
	}
	eliminarNota(req, res) {
		return _notasService.eliminar(req, res);
	}

}

module.exports = NotasController;