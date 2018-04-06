const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')

const app = express();
const port = process.env.PORT || 2000;

app.use(morgan("tiny"))
app.use(express.static(path.join(__dirname + "/views")))
app.use(express.static(path.join(__dirname + "/views/assets/bootstrap/css")))
app.use(express.static(path.join(__dirname + "/views/assets/bootstrap/js")))
app.use(express.static(path.join(__dirname + "/views/assets/js")))
app.use(express.static(path.join(__dirname + "/views/assets/css")))
app.use(express.static(path.join(__dirname + "/views/assets/fonts")))
app.use(express.static(path.join(__dirname + "/views/assets/founts")))


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
}),

app.listen(port, function () {
    console.log("Server is Ready... listening on port " + chalk.blue(port))
})