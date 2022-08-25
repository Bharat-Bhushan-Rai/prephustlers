const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.register = async (req, res) => {
  try {
    // console.log(req);
    let { firstname, lastname, email, password } = req.body;
    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        message: "User already exist",
        success: false,
      });
    }
    let hash = await bcrypt.hash(password, 10);
    user = User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash,
      provider: "Local",
    });

    const token = jwt.sign(user.email, process.env.JWT_SECRET);
    user.save().then(async (data, err) => {
      user.password = undefined;
      user = JSON.parse(JSON.stringify(user));
      res.status(200).json({
        message: "Registered Successfully",
        data: { user: user, token: token },
        success: true,
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "something went wrong",
      success: false,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    
    let user = await User.findOne({ email: req.body.email })
    

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    user.password = undefined;
    user = JSON.parse(JSON.stringify(user));

    res.status(200).json({
      message: "User logged in successfully",
      data: {
        user,
        token,
      },
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "something went wrong",
      success: false,
    });
  }
};

module.exports.googleSignup = (req, res) => {};
