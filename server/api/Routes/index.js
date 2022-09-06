var express = require('express');
var router = express.Router();
const passport = require('passport');
const upload=require('../../config/upload')
const {home,homedata}=require('../Controllers/Home');
const { uploadImage,  getUserImage } = require('../controllers/Media');
const { uploadpost } = require('../Controllers/Post');
const {register,login,googleSignup}=require('../Controllers/User');

// router.get('/',home);
router.get('/',passport.authenticate('jwt',{session:false}),homedata);

router.post('/auth/register/local', register );
router.post('/auth/login/local', login );
router.post('/auth/googleSignup',googleSignup);

router.get("/file/:filename", getUserImage);
router.post("/upload",passport.authenticate('jwt', { session:false }), upload.single("file"), uploadImage);

router.post('/upload/post',passport.authenticate('jwt',{session:false}),uploadpost)


module.exports= router;