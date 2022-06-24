const courseModel = require('../models/coursemodels')

exports.createCoures = async(req,res) =>{
    const result = await courseModel.create(req.body)
    res.send(result)

}
exports.getCoures = async(req,res) =>{
    const result = await courseModel.find({})
  
    res.send(result)

}
exports.getCouresById = async(req,res) =>{
    const _id  = req.params.id
    
    const result = await courseModel.findById({_id})
  
    console.log(result);

}