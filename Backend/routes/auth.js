const router = require('express').Router();
const User=require("../modals/User")
const CryptoJs=require("crypto-js")
const jwt = require('jsonwebtoken');

//Reister
router.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        isAdmin:req.body.isAdmin,
        password:CryptoJs.AES.encrypt(req.body.password,process.env.SECREAT_KEY).toString(),
    })
    try{
        
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Login
router.post("/login",async (req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username});
        if(!user){
            return res.status(401).json("credentioals");
        }
        const hashPassword=CryptoJs.AES.decrypt(user.password,process.env.SECREAT_KEY);
        const Password=hashPassword.toString(CryptoJs.enc.Utf8);
        // console.log(password)
        if(Password !== req.body.password){
            return res.status(401).json("Wrong Credentials");
        }
        const accesstoken=jwt.sign({
            id:user._id,isAdmin:user.isAdmin

        },process.env.SECREAT_KEY,{expiresIn:"3d"})
        const {password, ...others}=user._doc;
        res.status(200).json({...others,accesstoken});
    } catch (err) {
        res.status(500).json(err);        
    }

})
module.exports=router;
