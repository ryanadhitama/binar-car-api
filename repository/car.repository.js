const models = require("../models/index");
const { InternalServerError } = require("../utils/response.js");

class CarRepository {
  async getAll() {
    try {
      const cars = await models.car.findAll({
        include: [
          {
            model: models.size,
          },
        ],
      });
      return cars;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async getOneById(id) {
    try {
      const cars = await models.car.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: models.size,
          },
        ],
      });
      return cars;
    } catch (err) {
      throw new InternalServerError();
    }
  }
}

module.exports = new CarRepository();
