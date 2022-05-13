const UserService = require("../../../services/user.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");

class AdminController {
  async getAdmins(_, res) {
    try {
      const data = await UserService.getAllAdmins();
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
  async getAdminById(req, res) {
    const id = req.params.id;
    try {
      const data = await UserService.getOneById(id);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
  async addAdmin(req, res) {
    try {
      const data = await UserService.createAdmin(req.body);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
  async updateAdmin(req, res) {
    try {
      const id = req.params.id;
      const data = await UserService.updateAdmin(id, req.body);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
  async deleteAdmin(req, res) {
    try {
      const id = req.params.id;
      const data = await UserService.deleteAdmin(id, req.user);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
}

module.exports = new AdminController();
