const UserService = require("../../../services/user.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");
class AdminController {
  async getAdmins(_, res) {
    try {
      const data = await UserService.getAllAdmins();
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async getAdminById(req, res) {
    const id = req.params.id;
    try {
      const data = await UserService.getOneById(id);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = new AdminController();
