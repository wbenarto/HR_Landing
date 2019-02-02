// Import MySQL connection
const connection = require('./connection');

const printQuesionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};

const objToSql = (ob) => {
    const arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        };
    };

    return arr.toString();
};

const orm = {
    // Function that returns all table entries
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);

        // Database query
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }

};

module.exports = orm;