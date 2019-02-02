const express = require('express');
const app = express();
const path = require('path');

// Set port of the application
const PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));

// Establishing Handlebars as templating language
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Importing routes and giving access to it
const routes = require('./routes')

app.use('/', routes);




// Start our server 
app.listen(PORT, () => {
    console.log("Server is listening on: http://localhost:" + PORT)
});
