// post request for Login
const express = require ("express")
const router = express.Router()
const Login = require("../Model/loginSchema")
router.post("/", async (req, res) => {
  // Users.create(req.body)
  // console.log(req.body)
  Login.create(req.body);
});

module.exports = router