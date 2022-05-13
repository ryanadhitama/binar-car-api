const UserService = require("../../../services/user.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");

class UserController {
  async profile(req, res) {
    try {
      const { id } = req.user;
      const data = await UserService.getOneById(id);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
  async updateProfile(req, res) {
    try {
      const { id } = req.user;
      const data = await UserService.updateUser(id, req.body);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.status(err.status).send(err);
    }
  }
}

module.exports = new UserController();
