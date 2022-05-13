const v1 = require("express").Router();

const Authentication = require("../../middleware/authentication");

const AdminController = require("../../controller/api/v1/admin.controller.js");
const AuthController = require("../../controller/api/v1/auth.controller.js");
const CarController = require("../../controller/api/v1/car.controller.js");
const UserController = require("../../controller/api/v1/user.controller.js");

v1.get("/cars", CarController.getCars);
v1.get("/cars/:id", CarController.getCarById);

v1.post("/login", AuthController.login);
v1.post("/register", AuthController.register);
v1.get("/profile", [Authentication.requiredToken], UserController.profile);

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
