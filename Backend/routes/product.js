const product = require("../modals/Product");
const {verifyTokenAndAUthorization,verifyTokenAndAdmin} = require("./verify");

const router = require("express").Router();

//create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
 const newProduct=new product(req.body)

  try {
    const savedProdut = await newProduct.save();
    res.status(200).json(savedProdut);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct=await product.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    },{new:true});
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Product
router.get("/find/:id", async (req, res) => {
    try {
      const product1 = await product.findById(req.params.id);
      res.status(200).json(product1);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //GET ALL product
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.categories;
  try {
    let products;
    if(qNew){
    products=await product.find().sort({createdAt:-1}).limit(1);
    }else if(qCategory){
    console.log("first")
    products=await product.find({
        categories:{
            $in:[qCategory],
        },
    });
  }  else{
    products=await product.find();
  }
      // const product = query
      // ? await product.find().sort({ _id: -1 }).limit(5)
      // : await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
// //GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports=router;
