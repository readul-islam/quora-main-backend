const express = require('express');
const courseRoute = require('./routes/coursesRoute')
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());

app.use(courseRoute)
app.use(bodyParser.json());







module.exports= app;