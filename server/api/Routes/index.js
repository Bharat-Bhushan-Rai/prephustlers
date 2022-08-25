var express = require('express');
var router = express.Router();
const passport = require('passport');
const {home}=require('../Controllers/Home');
const {register,login,googleSignup}=require('../Controllers/User');

router.get('/',home);


router.post('/auth/register/local', register );
router.post('/auth/login/local', login );
router.post('/auth/googleSignup',googleSignup)


module.exports= router;