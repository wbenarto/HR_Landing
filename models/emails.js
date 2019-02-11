const orm = require('../config/orm.js');

const emails = {
    selectAll: (cb) => {
        orm.selectAll('emails', (res) => {
            cb(res);
        })
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne('emails', cols, vals, (res) => {
            cb(res);
        });
    }
}

module.exports = emails;