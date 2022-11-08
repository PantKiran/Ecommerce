const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

const productsRouter = require("./Controller/productsRouter");
const usersRouter = require("./Controller/usersRouter");
const loginRouter = require("../src/Controller/loginRouter");

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Ecommerce Server listening on port ${process.env.PORT}`);
});

// app.get("/productList", async (req, res) => {
//   const productList = await Users.find({});
//   res.json({
//     productList: productList,
//   });
// });

// post resquest for addProduct
// app.post("/productList", async (req, res) => {
//   // Users.create(req.body)
//   // console.log(req.body)
//   addProducts.create(req.body);
// });
// // post request for Login
// app.post("/login", async (req, res) => {
//   // Users.create(req.body)
//   // console.log(req.body)
//   Login.create(req.body);
// });

// // post request for register the user
// app.post("/register", async (req, res) => {
//   // Users.create(req.body)
//   // console.log(req.body)
//   Register.create(req.body);
// });
// Put Resquest for isFavoutite button
// app.put("/productList", async (req, res) => {
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
