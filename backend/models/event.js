const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema({

    eventName:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required: true
    },
    time:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        required: true
    },
    status:{
        type:String,
        required:true
    }



})

module.exports = mongoose.model('event',Event);