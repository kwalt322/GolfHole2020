const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render("pages/index");
});

app.use('/', routes);

module.exports = app;