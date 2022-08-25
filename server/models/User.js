const mongoose= require('mongoose');
// const {Schema}= mongoose;
const UserSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:null
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        default:[]
    }]

})
const User=mongoose.model('user',UserSchema);
module.exports= User;