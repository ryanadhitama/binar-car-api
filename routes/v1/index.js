const v1 = require("express").Router();
const AuthController = require("../../controller/api/v1/auth.controller.js");
const CarController = require("../../controller/api/v1/car.controller.js");

v1.get("/cars", CarController.getCars);
v1.get("/cars/:id", CarController.getCarById);

v1.post('/login', AuthController.login)

module.exports = v1;
