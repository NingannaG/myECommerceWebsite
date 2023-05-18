const express = require('express');
const app=express();
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const userRoute=require("./routes/user");
const authRoute = require("./routes/auth");
const products=require("./routes/product");
const order=require("./routes/order");
const cart=require("./routes/cart");
const strip=require("./routes/strip")
const cors = require("cors")


app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",products);
app.use("/api/order",order);
app.use("/api/cart",cart);
app.use("/api/checkout",strip)





mongoose.connect(process.env.URL).then(()=>{
    console.log("DB connection is successfull");
}).catch((err)=>{
    console.log(err)
});

// router.post("userposttest",(req,res=>{
//     const username=req.body.username;
//     console.log(username)
// }))


app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend is listening !")
})
