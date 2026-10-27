const express=require('express');
const router=express.Router();
const {registerUser,loginUser,refreshUserToken,sendPasswordResetOTP,resetPassword}=require('../controllers/userController');

const verifyEmail=require('../services/verify');

router.post('/register', registerUser);
router.get('/verify-email/:token',verifyEmail);
router.post('/login',loginUser);
router.post('/forgot-password', sendPasswordResetOTP);
router.post('/reset-password', resetPassword);
router.post('/refresh',refreshUserToken);


module.exports=router;