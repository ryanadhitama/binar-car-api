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
        attributes: {
          exclude: ["deleted_at", "deleted_by", "created_by", "updated_by"],
        },
      });
      return cars;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async getOneById(id) {
    try {
      const car = await models.car.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: models.size,
          },
        ],
        attributes: {
          exclude: ["deleted_at", "deleted_by", "created_by", "updated_by"],
        },
      });
      return car;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async store(data) {
    try {
      const car = await models.car.create(data);
      const newCar = await models.car.findOne({
        where: {
          id: car.id,
        },
        include: [
          {
            model: models.size,
          },
        ],
        attributes: {
          exclude: ["deleted_at", "deleted_by", "created_by", "updated_by"],
        },
      });
      return newCar;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async update(id, data) {
    try {
      await models.car.update(data, { where: { id } });
      const car = await models.car.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: models.size,
          },
        ],
        attributes: {
          exclude: ["deleted_at", "deleted_by", "created_by", "updated_by"],
        },
      });
      return car;
    } catch (err) {
      throw new InternalServerError();
    }
  }
}

module.exports = new CarRepository();
