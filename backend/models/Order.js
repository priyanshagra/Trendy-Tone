const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
    },
    primary_colour:{
        type:String,
        required: true
    },
    secondary_colour:{
        type:String,
        required:true,  
    },
    collar:{
        type:String,
        required:true,  
    },
    sleeve:{
        type:String,
        required:true,  
    },
    titletoshow:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,  
    },
    size:{
        type:String,
        required:true,  
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('customer',OrderSchema);