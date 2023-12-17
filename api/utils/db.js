const mysql = require("mysql2/promise");
const { DB_PASS, DB_USER, DB_PORT, DB_HOST, DB_NAME } = require("./constants.js");

const connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

module.exports = connection;
