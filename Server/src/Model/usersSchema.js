const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      phoneNumber: { type: String, unique: true },
      password: String,
      fullName: {type:String, required:true},
      token:{type:String, default:''}
    },
    {
      collection: "Register",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel