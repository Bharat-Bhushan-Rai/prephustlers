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
        default:null
    },
    description:{
        type:String,
        default:null
    },
    liker:[{
        type:Schema.Types.ObjectId
    }],
    
})
const Post=mongoose.model('post',PostSchema);
module.exports=Post;