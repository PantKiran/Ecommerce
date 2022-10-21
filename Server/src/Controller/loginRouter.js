// post request for Login
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require('jsonwebtoken');
const login = require("../Model/loginSchema");
const users = require("../Model/usersSchema");
router.post("/", async (req, res) => {
  const userData = users.findOne({ phoneNumber: req.body.phoneNumber},
 function (err, data) {
      if (err) console.log(err)
      if (data) {
        bcrypt.compare(req.body.password, data.password, function (err, result) {
        
          if(err) console.log(err)
          if(result){
            res.json({
              message:" password matched"
            })
          }
        })
      }
    });
});

module.exports = router;
