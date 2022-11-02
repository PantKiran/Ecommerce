const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const productsSchema = new mongoose.Schema({
    productName: {type:String, required:true},
    price:{type:String, required:true},
    brandName:{type:String, required:true},
    productId:{type:String, required:true},
    isFavourite:{type:Boolean},
    fileName:{type:String, required:true}
  },
  {
    collection:'productList'
  
  })
  
  
 
  productsSchema.plugin(mongoosePaginate);

  const productsModel = mongoose.model('productsModel', productsSchema)
  productsModel.paginate().then({});
  const myCustomLabels = {
    totalDocs: 'itemCount',
    docs: 'itemsList',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
  };
  const options = {
    page: 1,
    limit: 10,
    customLabels: myCustomLabels,
  };
  productsModel.paginate({}, options, function (err, result) {
    result.paginator.perPage = 10
  });
  module.exports= productsModel