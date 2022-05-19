const express = require("express");
const routes = express.Router();
const Answers = require("../models/answers");
// let db = [{ 1: { name: "John", age: 20 } }, { 2: { name: "Jane", age: 21 } }];

// GET records
routes.get("/", async (req, res) => {
   try {
     const people = await Answers.find();

     res.status(200).json(people);
   } catch (error) {
     res.status(500).json({ erro: error });
   }
});

















// POST new record
routes.post("/new-record", (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).end();

  db.push(body);
  return res.json(body);
});

//DELETE a record
routes.delete("/:id", (req, res) => {
  const id = req.params.id;

  let newDB = db.filter((item) => {
    if (!item[id]) return item;
  });
  db = newDB;
  return res.send(newDB);
});

module.exports = routes;
