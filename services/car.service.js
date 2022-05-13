const CarRepository = require("../repository/car.repository.js");
const { NotFound } = require("../utils/response.js");

class CarService {
  async getAllCars() {
    const cars = await CarRepository.getAll();
    return cars;
  }
  async getOneById(id) {
    const cars = await CarRepository.getOneById(id);
    if (!cars) {
      throw new NotFound();
    }
    return cars;
  }
  async createCar(data, user) {
    const { name, price, size_id, photo } = data;
    const created_by = user?.id;

    const car = await CarRepository.store({
      name,
      price,
      size_id,
      photo,
      created_by,
    });

    return car;
  }
  async updateCar(id, data, user) {
    const { name, price, size_id, photo } = data;
    const updated_by = user?.id;

    const isExists = await CarRepository.getOneById(id);
    if (!isExists) {
      throw new NotFound();
    }

    const car = await CarRepository.update(id, {
      name,
      price,
      size_id,
      photo,
      updated_by,
    });

    return car;
  }
  async deleteCar(id, user) {
    const deleted_by = user?.id;
    const deleted_at = new Date();

    const isExists = await CarRepository.getOneById(id);
    if (!isExists) {
      throw new NotFound();
    }

    await CarRepository.update(id, {
      deleted_at,
      deleted_by,
    });
    return null;
  }
}

module.exports = new CarService();
