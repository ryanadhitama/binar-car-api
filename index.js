require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const env = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(env.PORT, () => {
  console.info(`App listening at http://localhost:${env.PORT}`);
});

module.exports = app;