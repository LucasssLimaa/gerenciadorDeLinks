const expres = require('express');
const app = expres();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/newLinks');

let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro")
});
db.once("open", () => {
    console.log("Banco carregado");
})

app.use('/', linkRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.listen(port, () => {
    console.log("App running on port", port);
})