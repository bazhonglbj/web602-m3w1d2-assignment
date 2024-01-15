const express = require ('express');
const path = require('path')
const bodyparser = require ('body-parser')
const routes = require ('./routes/index');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine' , 'pug');

app.use(bodyparser.urlencoded({extended:true}));
app.use('/',routes);

module.exports = app