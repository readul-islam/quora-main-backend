const express = require('express');
const courseRoute = require('./routes/coursesRoute')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(courseRoute)








module.exports= app;