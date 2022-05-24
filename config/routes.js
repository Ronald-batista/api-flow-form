const express = require("express");
const routes = express.Router();
const Answers = require("../controllers/answersController");

// GET records
routes.get("/", Answers.show);
routes.post("/new-record", Answers.create);


module.exports = routes;
