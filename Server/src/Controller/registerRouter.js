const express = require('express')
const router = express.Router()
const Register = require("../Model/registerSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// post request for register the user
router.post("/", async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
 req.body.password = hash    
 const data=   Register.create(req.body);
  if(data){
    res.json({
      msg:'Request has been sent successfully'
    })
  }
});
  });
  
  
  
module.exports= router