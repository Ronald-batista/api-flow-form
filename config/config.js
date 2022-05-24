require('dotenv').config();
var fs = require("fs");

const serverCa = [fs.readFileSync("certs/DigiCertGlobalRootCA.crt.pem", "utf8")];

module.exports = {
  development: {
    // Default da variavel de ambiente NODE_ENV
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    ssl: true,
    dialectOptions: {
      // encrypt: true,
      ssl: {
        rejectUnauthorized: true,
        ca: serverCa,
      },
    },
  },
  test: {
    // not configured
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    // not configured
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
