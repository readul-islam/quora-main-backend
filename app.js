const express = require('express');
const cors = require('cors');
const courseRoute = require('./routes/coursesRoute')

const app = express();
app.use(cors());

app.use(express.json());

app.use(courseRoute)







module.exports= app;