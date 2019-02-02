const orm = require('../config/orm');

const emails = {
    selectAll: (cb) => {
        orm.selectAll('emails', (res) => {
            cb(res);
        })
    }
}

module.exports = emails;