import mongoose from "mongoose";
const Schema=mongoose.Schema;

const CVSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    projects:{
        type:String,
        required:false
    },
    extra:{
        type:String,
        required:false
    },
    links:{
        type:String,
        required:false
    }

})

const CV = mongoose.model("CV",CVSchema);

export default CV;