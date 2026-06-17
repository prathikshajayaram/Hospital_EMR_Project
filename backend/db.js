const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "hospital_emr"
});

db.connect((err) => {
    if (err) {
        console.log("DB Connection Error");
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
    }
});

module.exports = db;