const mongoose = require('mongoose')
const productListSchema = new mongoose.Schema({
    productName: {type:String, required:true},
    price:{type:String, required:true},
    brandName:{type:String, required:true},
    productId:{type:String, required:true},
    isFavourite:{type:Boolean}
  },
  {
    collection:'productList'
  
  })
  const productListModel = mongoose.model('productListModel', productListSchema)
  
  module.exports= productListModel