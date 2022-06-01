const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./config/routes");
require("dotenv").config();
const models = require("./models")

const protocol = process.env.PROTOCOL || "http";
// const ip = require("ip").address(); // npm package not installed
const port = process.env.PORT || 21262;


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
