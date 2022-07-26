const expres = require('express');
const app = expres();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/newLinks');  // Caso não funcione, use "{ useNewUrlParser: true, useUnifiedTopology: true}"

let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro")});
db.once("open", () => {
    console.log("Banco carregado");
})

app.use('/', linkRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates')); //"views" seta as views do ejs para pasta "templates"

app.listen(port, () => {
    console.log("App running on port", port);
})
