// const Cart = require("../modals/Cart");
const {verifyTokenAndAUthorization,verifyTokenAndAdmin} = require("./verify");
const router = require("express").Router();

//create 
router.put("/:id",verifyTokenAndAUthorization,async (req,res)=>{
    try {
        const updatedCart=await Cart.findByIdAndUpdate(
            req.param.id,{
                $set:req.body,
            },
            {new:true}
        );
        res.status(200).json(updatedCart)
        
    } catch (error) {
        res.status(200).json(err)
        
    }
})

//UPDATE
// router.put("/:id", verifyTokenAndAUthorization, async (req, res) => {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.SECREAT_KEY
//     ).toString();
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE
router.delete("/:id", verifyTokenAndAUthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user Cart
router.get("/find/:userId", verifyTokenAndAUthorization, async (req, res) => {
  try {
    const Cart = await Cart.findOne({userId: req.params.user});
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router;
