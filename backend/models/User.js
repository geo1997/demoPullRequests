const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName:{
        type:String
    },

    lastName:{
        type: String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }



});


module.exports = mongoose.model('user',UserSchema);