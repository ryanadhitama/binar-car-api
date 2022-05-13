const models = require("../models/index");
const { InternalServerError } = require("../utils/response.js");

class UserRepository {
  async getOneByEmail(query) {
    try {
      const { email } = query;
      const user = await models.user.findOne({
        where: { email },
      });

      return user;
    } catch (err) {
      throw new InternalServerError();
    }
  }
}

module.exports = new UserRepository();
