const Post = require("../../models/Post");

module.exports.uploadpost=async(req,res)=>{
    try{
        let user=req.user;
        // console.log(req.body);
        if(user){

            let post= Post({
                postedby:req.user._id,
                image:req.body.image,
                link:req.body.link,
                description:req.body.description

            });
            post.save().then((data,error)=>{
                return res.status(200).json({
                    message: "Posted successfully",
                    // data: { user: user, token: token },
                    success: true,
                  });
            })
        }else{
            return res.status(400).json({
                message:"please add a valid token",
                success: false
            })
        }
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
          });
    }
}