// Import MySQL connection
const connection = require('../config/connection.js');

// const printQuesionMarks = (num) => {
//     let arr = [];

//     for (let i = 0; i < num; i++) {
//         arr.push("?");
//     };

//     return arr.toString();
// };

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


// const objToSql = (ob) => {
//     const arr = [];

//     for (var key in ob) {
//         if (Object.hasOwnProperty.call(ob, key)) {
//             arr.push(key + "=" + ob[key]);
//         };
//     };

//     return arr.toString();
// };

let orm = {
    // Function that returns all table entries
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);

        // Database query
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Function that insert a single table entry
    insertOne: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;

        // INSERT INTO (cols) VALUES (printquestionMarks(vals.length));
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        // Database query
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }

};

module.exports = orm;