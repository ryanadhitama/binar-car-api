const UserService = require("../../../services/user.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await UserService.login(email, password);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async register(req, res) {
    try {
      const data = await UserService.register(req.body);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = new AuthController();
