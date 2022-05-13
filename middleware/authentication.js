require("dotenv").config();
const jwt = require("jsonwebtoken");
const { NotAuthenticated } = require("../utils/response.js");

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
      res.send(new NotAuthenticated());
    }
  }
}

module.exports = new Authentication();
