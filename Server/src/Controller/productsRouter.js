const express = require("express");
const router = express.Router();
const products = require("../Model/productsSchema");

//multer file image upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "productImages/");
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
  //  // destructure page and limit and set default values
  //  const { page = 1, limit = 10 } = req.query;

  //  try {
  //    // execute query with page and limit values
  //    const posts = await products.find()
  //      .limit(limit * 1)
  //      .skip((page - 1) * limit)
  //      .exec();

  //    // get total documents in the Posts collection
  //    const count = await products.countDocuments();

  //    // return response with posts, total pages, and current page
  //    res.json({
  //      posts,
  //      totalPages: Math.ceil(count / limit),
  //      currentPage: page
  //    });
  //  } catch (err) {
  //    console.error(err.message);
  //  }
  const data = await products.find({});
  res.json({
    products: data,
  });
});

//Post Products
router.post("/", upload, async (req, res) => {
  //  console.log(req.file)
  req.body.fileName = req.file.path;
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

module.exports = router;
