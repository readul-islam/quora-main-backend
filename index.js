const app = require('./app');
const courseModel = require('./models/coursemodels')
const courseRoute = require('./routes/coursesRoute')
const dataConnect = require('./database')
 require('dotenv').config();
 const port = process.env.PORT || 8080;

dataConnect()
app.use(courseRoute)

app.get('/',(req,res)=>{
res.send({success:true})
})
app.get('/course',async(req,res)=>{
    const result = await courseModel.find({})
    res.send(result)
})

app.listen(port,()=>{
    console.log(port);
})