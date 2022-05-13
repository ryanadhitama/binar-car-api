const UserService = require("../../../services/user.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");
class UserController {
  async profile(req, res) {
    try {
      const { id } = req.user;
      const data = await UserService.getOneById(id);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = new UserController();
