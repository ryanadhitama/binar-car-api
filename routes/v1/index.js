const v1 = require("express").Router();
const CarController = require("../../controller/api/v1/car.controller.js");

v1.get("/cars", CarController.getCars);
v1.get("/cars/:id", CarController.getCarById);

module.exports = v1;
