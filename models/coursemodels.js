const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  title:  String, 
  description: String, 
  price: Number,
  image: String,
 });

 module.exports= mongoose.model('course',courseSchema);