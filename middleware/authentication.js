require("dotenv").config();
const jwt = require("jsonwebtoken");
const { NotAuthenticated, Forbidden } = require("../utils/response.js");

class Authentication {
  async requiredToken(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1];

      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY, {
        maxAge: "1h",
      });
      req.user = payload;
      next();
    } catch (err) {
      res.status(401).send(new NotAuthenticated());
    }
  }
  async isAdmin(req, res, next) {
    if (!req.user) {
      next(new NotAuthenticated());
    }

    const { role } = req.user;
    if (role === "ADMIN" || role === "SUPERADMIN") {
      next();
      return;
    }
    res.status(403).send(new Forbidden());
  }
  async isSuperadmin(req, res, next) {
    if (!req.user) {
      next(new NotAuthenticated());
    }

    const { role } = req.user;
    if (role === "SUPERADMIN") {
      next();
      return;
    }
    res.status(403).send(new Forbidden());
  }
}

module.exports = new Authentication();
