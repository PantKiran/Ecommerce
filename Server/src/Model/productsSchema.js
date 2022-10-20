const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    productName: {type:String, required:true},
    price:{type:String, required:true},
    brandName:{type:String, required:true},
    productId:{type:String, required:true},
    isFavourite:{type:Boolean}
  },
  {
    collection:'productList'
  
  })
  const productsModel = mongoose.model('productsModel', productsSchema)
  
  module.exports= productsModel