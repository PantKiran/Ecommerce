const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema(
    {
      phoneNumber: { type: String, unique: true },
      password: String,
      fullName: {type:String, required:true}
    },
    {
      collection: "Register",
    }
  );
  const registerModel = mongoose.model("RegisterModel", RegisterSchema);
  module.exports= registerModel