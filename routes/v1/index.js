const v1 = require("express").Router();

const Authentication = require("../../middleware/authentication");

const AdminController = require("../../controller/api/v1/admin.controller.js");
const AuthController = require("../../controller/api/v1/auth.controller.js");
const CarController = require("../../controller/api/v1/car.controller.js");
const UserController = require("../../controller/api/v1/user.controller.js");

// CARS
v1.post(
  "/cars",
  [Authentication.requiredToken, Authentication.isAdmin],
  CarController.addCar
);
v1.put(
  "/cars/:id",
  [Authentication.requiredToken, Authentication.isAdmin],
  CarController.updateCar
);
v1.delete(
  "/cars/:id",
  [Authentication.requiredToken, Authentication.isAdmin],
  CarController.deleteCar
);
v1.get("/cars", CarController.getCars);
v1.get("/cars/:id", CarController.getCarById);

// USER
v1.post("/login", AuthController.login);
v1.post("/register", AuthController.register);
v1.get("/profile", [Authentication.requiredToken], UserController.profile);

// ADMIN
v1.post(
  "/admins",
  [Authentication.requiredToken, Authentication.isSuperadmin],
  AdminController.addAdmin
);
v1.put(
  "/admins/:id",
  [Authentication.requiredToken, Authentication.isSuperadmin],
  AdminController.updateAdmin
);
v1.delete(
  "/admins/:id",
  [Authentication.requiredToken, Authentication.isSuperadmin],
  AdminController.deleteAdmin
);
v1.get(
  "/admins",
  [Authentication.requiredToken, Authentication.isSuperadmin],
  AdminController.getAdmins
);
v1.get(
  "/admins/:id",
  [Authentication.requiredToken, Authentication.isSuperadmin],
  AdminController.getAdminById
);

module.exports = v1;
