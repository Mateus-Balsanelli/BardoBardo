const mysql = require('mysql');
const dbconfig = require('../configs/db.config');

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

connection.connect(error => {
    if(error) throw error;
    console.log("DB conectado");
});

module.exports = connection;