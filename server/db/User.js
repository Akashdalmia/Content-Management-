const mongoose = require('mongoose');

const User =  mongoose.Schema({
    title:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    image:{
        type:String,required:true
    },
})

//module.exports = User = mongoose.model('user', user);
exports.User = mongoose.model('user', User);
 