const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./config/routes");
const mongoose = require('mongoose');

const flatmapfuncionaporfavor = require("core-js/stable");

mongoose
  .connect(
    "mongodb+srv://userRonald:Sharkoon1001001@cluster0.7blnu.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((err) => {
    console.log("ERRO AO CONECTAR NO BANCO DE DADOS" + err);
  });

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(21262, () => {
  console.log("Server is running on http://localhost:21262");
});
