const app = require('./app');
const dataConnect = require('./database')
 require('dotenv').config();
 const port = process.env.PORT || 8080;

dataConnect()


app.get('/',(req,res)=>{
res.send({success:true})
})


app.listen(port,()=>{
    console.log(port);
})