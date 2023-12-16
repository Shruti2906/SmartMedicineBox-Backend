const mysql = require('mysql');
const { DB_PASS, DB_USER, DB_PORT, DB_HOST } = require('./constants.js');

const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS
});

connection.connect(function (err){
    if(err){
        console.error("Error connecting",err);
    }
    else{
        console.log("Connected");
    }
});

module.exports = connection;