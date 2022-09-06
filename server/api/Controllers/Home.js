module.exports.home = (req, res) => {
  res.status(200).json({
    msg: "API Working",
    success: true,
  });
};

module.exports.homedata = async (req, res) => {
  try {
    let user=req.user;
    if(user){
        user.password=undefined;
        return res.status(200).json({
            message:"homedata fetched successfully",
            success:true,
            data:{
                user
            }
        })
    }
    else{
            return res.status(400).json({
            message:"please add a valid token",
            success: false
        })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
