const mysql = require('mysql');

// PARAM CONNECTION

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taskslist"
});

//OPEN CONNECTION

db.connect(error => {
    if(error) throw error;
    console.log("connected 2 db");
});

module.exports = db;