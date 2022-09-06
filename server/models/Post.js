const mongoose=require('mongoose');
const {Schema}=mongoose;

const PostSchema= new Schema({
    postedby:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    image:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    }
    
    
})
const Post=mongoose.model('post',PostSchema);
module.exports=Post;