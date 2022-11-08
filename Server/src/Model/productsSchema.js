const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const productsSchema = new mongoose.Schema({
    productName: {type:String, required:true},
    price:{type:String, required:true},
    brandName:{type:String, required:true},
    productId:{type:String, required:true},
    filename:{type:String, required:true},
    // isFavourite:{type:Boolean},
  },
  {
    collection:'productList'
  })


  productsSchema.plugin(mongoosePaginate);

  const productsModel = mongoose.model('productsModel', productsSchema)
  module.exports= productsModel

  productsModel.paginate().then({}); // Usage
  const options = {
    page: 1,
    limit: 10,
    collation: {
      locale: 'en',
    },
  };
productsModel.paginate({}, options, function (err, result) {
  result.docs
  result.totalDocs = 100
  result.limit = 10
  result.page = 1
  result.totalPages = 10
  result.hasNextPage = true
  result.nextPage = 2
  result.hasPrevPage = false
  result.prevPage = null
  result.pagingCounter = 1
  
  });