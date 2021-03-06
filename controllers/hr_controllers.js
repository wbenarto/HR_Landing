const express = require('express');
const router = express.Router();

// Import the model to use its database functions
const emails = require('../models/emails');

router.get('/', (req, res) => {
    // res.render(path.join(__dirname, '../public/index.html'))
    emails.selectAll((data) => {
        let hbsObject = {
            emails: data
        };

        res.render('index', hbsObject);
    });
});

router.get('/show', (req, res) => {
    // res.render(path.join(__dirname, '../public/index.html'))
    emails.selectAll((data) => {
        let hbsObject = {
            emails: data
        };

        res.render('show', {hbsObject});
    });
});

router.post('/', (req, res) => {
    emails.insertOne([
            'emails'
        ], [req.body.email], 
        (data) => {
            res.redirect('/');
        });
});

// Export routes for server.js
module.exports = router;