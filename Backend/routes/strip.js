const router=require("express").Router();
const KEY=process.env.STRIPE_KEY;
const stripe=require("stripe")(KEY);

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    },
    (stripeErr,striperes)=>{
        if(stripeErr){
            res.status(200).json(striperes);
        }
        else{
            res.status(500).json(stripeErr);
        }
    })
})


module.exports=router;