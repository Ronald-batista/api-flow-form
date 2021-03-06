const Sequelize = require("sequelize");
require("dotenv").config();
var fs = require("fs");

const database = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT || "mysql";
const cert = process.env.SSL_CA;

const connection = new Sequelize(database, username, password, {
  host,
  dialect,
  dialectOptions: {
   // encrypt: true,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(cert, "utf8"),
    },
  },
});

module.exports = connection;
