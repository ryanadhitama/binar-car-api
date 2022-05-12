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
}

module.exports = new CarController();
