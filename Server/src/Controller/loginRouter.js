// post request for Login
const express = require ("express")
const router = express.Router()
const login = require("../Model/loginSchema")
const products= require("../Model/usersSchema")
router.post("/", async (req, res) => {
  const user = products.findOne(
    {
      phoneNumber:req.body.phoneNumber
    })
  console.log(user)
});

module.exports = router