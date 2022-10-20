const express = require('express')
const router = express.Router()
const products = require("../Model/productsSchema");

//Get productList
router.get("/", async (req, res) => {
     const data= await products.find({});
    res.json({
      products: data,
    });
  });
  
  //Post ProductList
  router.post("/", async (req, res) => {
    // Users.create(req.body)
    // console.log(req.body)
    products.create(req.body);
  });
  
  // toggle the Favourite button
  router.put("/", async (req, res) => {
    console.log(req.body);
    const filter = { isFavourite: req.body.isFavourite };
    const update = { isFavourite: true };
    let data = await Users.findOneAndUpdate({ filter });
    if (data) {
      res.json({
        message: "updated",
      });
    }
  });

 module.exports=router 