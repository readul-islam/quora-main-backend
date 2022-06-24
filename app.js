const express = require('express');
const courseRoute = require('./routes/coursesRoute')
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());
app.use(courseRoute)








module.exports= app;