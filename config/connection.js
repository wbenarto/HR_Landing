// Set up MySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "emails_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    };

    console.log("Connected to MySQL database as id " + connection.threadId);
})
