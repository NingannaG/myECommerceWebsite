const Order = require("../modals/Order");
// const order = require("../modals/Order");
const { verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./verify");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER oders
router.get("/find/:userId", verifyTokenAndAdmin, async (req, res) => {
    try {
        const order = await Order.find({userId: req.params.userId});
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const order12 = await Order.find();
        res.status(200).json(order12);
    } catch (err) {
        res.status(500).json(err);
    }
});

//new order
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedData = await newOrder.save();
        res.status(200).json(savedData)
    } catch (err) {
        res.status(500).json(err);
    }
});

//month stats
router.get("/income", verifyTokenAndAUthorization, async (req, res) => {
    const produt_id=req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth },...(produt_id && {
            products:{
                $elementMatch:{product_id}
            }
        }) } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
