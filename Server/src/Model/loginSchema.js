const mongoose = require('mongoose')
const loginSchema = new mongoose.Schema(
    {
      emailAddress: { type: String, required: true },
      password: { type: String, required: true },
    },
    {
      collection: "Login",
    }
  )
  const loginModel = mongoose.model('LoginModel', loginSchema)
  module.exports= loginModel