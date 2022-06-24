const express = require('express');
const courseModel = require('../models/coursemodels')
const router = express.Router();


router.get('/course',async(req,res)=>{
    const result = await courseModel.find({})
    res.send(result)
})
router.post('/course',async(req,res)=>{
    const result = await courseModel.create(req.body)
    res.send(result)

})
router.get('/course/:id',async(req,res)=>{
    const _id  = req.params.id
    const result = await courseModel.findById({_id})
    console.log(result);
})








module.exports =router;