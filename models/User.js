const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlengh:50
    },
    email:{
        type : String,
        trim: true,
        unique : 1
    },
    password:{
        type:String,
        minlength : 5
    },
    lastname:{
        type:String,
        maxlengh:50
    },
    role:{
        type:Number,
        default:0
    },
    image : {
        type:String
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})
/*
model은 스키마를 감싸주는 역할
*/
const User = mongoose.model('User', userSchema);

module.exports={User};

