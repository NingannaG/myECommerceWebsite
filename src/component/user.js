const router = require("express").Router();

router.put("/:id",(req,res)=>{
    res.send("user is successfull")
});

router.get("/usertest",(req,res)=>{
    res.send("user test is successfull")
});


router.post("/userposttest",(req,res)=>{
    const username=req.body.username;
    console.log(username)
});


module.exports = router;