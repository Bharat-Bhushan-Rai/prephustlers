const User = require("../../models/User");

module.exports.uploadImage = async (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(200).json({
        success: false,
        message: "File must be selected",
      });
    }
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    console.log(req);

    if (req.user.image) {
      res.gfs.files
        .deleteOne({ filename: req.user.image })
        .then((data, err) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: "Error in deleting image from database",
              error: err.message,
            });
          }
        });
    }

    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          image: req.file.filename,
        },
      }
    ).then((data, err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Error in updating user image",
          error: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        user:req.user,
        imgUrl,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports.getUserImage =  async (req, res) => {
  res.gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // const readstream = gfs.createReadStream(file.filename);
    const readstream = res.gridfsBucket.openDownloadStream(file._id);
    readstream.pipe(res);
  });
}


module.exports.deleteImage = async (req, res) => {
  try {
      await res.gfs.files.deleteOne({ filename: req.params.filename });
      res.send("success");
  } catch (error) {
      console.log(error);
      res.send("An error occured.");
  }
}