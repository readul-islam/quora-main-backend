const app = require('./app');
const courseRoute = require('./routes/coursesRoute')
const dataConnect = require('./database')
 require('dotenv').config();
 const port = process.env.PORT || 5000;

dataConnect()
app.use(courseRoute)
app.get('/',(req,res)=>{
res.send({success:true})
})

app.listen(port,()=>{
    console.log(port);
})