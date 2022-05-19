const { response } = require("express");
const express = require("express"); 
const asyncify = require("express-asyncify");
const answers = require("../models/answers");
const routes = express.Router();
//const asyncRoute = require("route-async");
//const someAsync = require("./helpers/someAsync");

//let db = [{ 1: { name: "John", age: 20 } }, { 2: { name: "Jane", age: 21 } }];

// GET records
routes.get("/", async (req, res) => {
  const answer = await answers.findAll();
  response.send(answer);
  
  // try {
    
  // } catch {
  //   response.status(500).send(error);
  // }
  // return res.json(db);answer
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

    let newDB = db.filter(item => {
        if (!item[id])
            return item;
    });
    db = newDB;
    return res.send(newDB);
});

module.exports = routes;