require("dotenv").config();
const mysql = require("mysql2");

console.log("DB_USER =root", process.env.DB_USER);
console.log("DB_PASSWORD =prathiksha@0624", process.env.DB_PASSWORD);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {

    if(err){
        console.log("Database Error");
        console.log(err);
    }
    else{
        console.log("Database Connected Successfully");
    }

});

module.exports = db;