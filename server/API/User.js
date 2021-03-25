const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/User');
const route = express.Router();

route.post('/',async(req,res)=>{
    //const {title,description,image} =req.body;
    const user = new User({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
    })
    console.log(user)
    const data = await user.save();
    
    if(data){
        return res.status(200).json({'success':true,'data':data})
    }
    return res.status(400).json({'success':false,'data':data})

});



module.exports= route;

