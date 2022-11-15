const express = require("express");
const router = express.Router();
const products = require("../Model/productsSchema");

//multer file image upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/productImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("avatar");
// router.post('/', upload, function (req, res, next) {
// })

//Get products
router.get("/", async (req, res) => {
  



  const data = await products.find({});
  res.json({
    products: data,
  });

});

//Post Products
router.post("/", upload, async (req, res) => {
  // console.log(req.file)
  req.body.filename = req.file.filename;
  // console.log(req.body)
  
  products.create(req.body)

});

// // toggle the Favourite button
// router.put("/", async (req, res) => {
//   console.log(req.body);
//   const filter = { isFavourite: req.body.isFavourite };
//   const update = { isFavourite: true };
//   let data = await Users.findOneAndUpdate({ filter });
//   if (data) {
//     res.json({
//       message: "updated",
//     });
//   }
// });

module.exports = router;
