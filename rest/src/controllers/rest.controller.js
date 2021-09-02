let _restService = null;
class RestController {
  constructor({ RestService }) {
    _restService = RestService;
  }
  moverPendientes(req, res) {
    return _restService._moverPendientes(req, res);
  }
}

module.exports = RestController;
