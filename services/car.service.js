const CarRepository = require('../repository/car.repository.js')

class CarService {
  async getAllCars() {
    const cars = await CarRepository.getAll();
    return cars;
  }
  async getOneById(id) {
    const cars = await CarRepository.getOneById(id);
    return cars;
  }
}

module.exports = new CarService();
