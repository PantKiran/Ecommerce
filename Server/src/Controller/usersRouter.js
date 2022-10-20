const express = require("express");
const router = express.Router();
const users = require("../Model/usersSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// post request for register the user
router.post("/", async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    req.body.password = hash;
    const data = users.create(req.body);
    if (data) {
      res.json({
        msg: "Request has been sent successfully",
      });
    }
  });
});

// view users
router.get("/", async (req, res) => {
  const data= await users.find({});
 res.json({
   users: data,
 });
});

module.exports = router;
