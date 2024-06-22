const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    Q1:{
        type:Boolean,
        required:true
    },
    Q2:{
        type:Boolean,
        required:true
    },
    Q3:{
        type:Boolean,
        required:true
    },
    Q4:{
        type:Boolean,
        required:true
    },
    Q5:{
        type:Boolean,
        required:true
    },
    sellerDescription:{
        type:String,
    },

    rating:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    mlrating:{
        type:Number,
    },
}, {timestamps: true});

const Form = new mongoose.model("Form",formSchema);

module.exports = Form;