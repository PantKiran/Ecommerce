const express = require('express')
const router = express.Router()
const Register = require("../Model/registerSchema");

// post request for register the user
router.post("/", async (req, res) => {
    // Users.create(req.body)
    // console.log(req.body)
  const data= await  Register.create(req.body);
  if(data){
    res.json({
      msg:'Request has been sent successfully'
    })
  }
  });
  
  
  
module.exports= router