const mongoose = require('mongoose');



const dataConnect = () => {
    mongoose.connect(
        process.env.DB_URI 
        ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      

    }).then((data)=>{
        console.log(data.connections[0].host);
    }).catch(err => console.error(err));

}
module.exports = dataConnect;