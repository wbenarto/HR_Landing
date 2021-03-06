// Set up MySQL connection
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "emails_db"
    });
};

connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    };

    console.log("Connected to MySQL database as id " + connection.threadId);
})

module.exports = connection;