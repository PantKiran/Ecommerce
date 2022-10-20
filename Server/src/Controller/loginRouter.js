// post request for Login
const express = require ("express")
const router = express.Router()
const Login = require("../Model/loginSchema")
const Register= require("../Model/registerSchema")
router.post("/", async (req, res) => {
  const user = Register.findOne(
    {
      phoneNumber:req.body.phoneNumber
    })
  console.log(user)
});

module.exports = router