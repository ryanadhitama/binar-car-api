const CarService = require("../../../services/car.service.js");
const { SuccessFetchResponse } = require("../../../utils/response.js");

class CarController {
  async getCars(_, res) {
    try {
      const data = await CarService.getAllCars();
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async getCarById(req, res) {
    const id = req.params.id;
    try {
      const data = await CarService.getOneById(id);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async addCar(req, res) {
    try {
      const data = await CarService.createCar(req.body, req.user);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async updateCar(req, res) {
    try {
      const id = req.params.id;
      const data = await CarService.updateCar(id, req.body, req.user);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
  async deleteCar(req, res) {
    try {
      const id = req.params.id;
      const data = await CarService.deleteCar(id, req.user);
      return SuccessFetchResponse(res, data);
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = new CarController();
