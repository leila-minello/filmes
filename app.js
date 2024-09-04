var express = require('express');
var path = require('path');
require('dotenv').config();

var indexRouter = require('./routes/index');
var filmRouter = require("./routes/films");
var authRouter = require("./routes/auth");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Servidor OK!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);
app.use("/api/films", filmRouter);
app.use("/api/auth", authRouter);
app.use('/install', installRouter);

module.exports = app;
