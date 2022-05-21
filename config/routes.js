const express = require("express");
const routes = express.Router();
const Answers = require("../controllers/answersController");

// let db = [{ 1: { name: "John", age: 20 } }, { 2: { name: "Jane", age: 21 } }];

// GET records
routes.get("/", Answers.show);




// POST new record
// routes.post("/new-record", async (req, res) => {
//   try {
//     const answer = new Answers({
//     name: req.body.name,
//     email: req.body.email,
//   });
//   await Answers.save();
//   return res.json(answer);
//   } catch (error) {
//      res.status(500).json({ erro: error });
//   }
// });




// //DELETE a record
// routes.delete("/:id", (req, res) => {
//   const id = req.params.id;

//   let newDB = db.filter((item) => {
//     if (!item[id]) return item;
//   });
//   db = newDB;
//   return res.send(newDB);
// });

module.exports = routes;
