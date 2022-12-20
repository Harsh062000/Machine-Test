const mongoose = require('mongoose')

const ProducteSchema = new mongoose.Schema({
       producutName:{
              type: String,
              required: [true, 'Please enter product name'],
              unique: true,
              trinm: true,
              maxlength: [50, 'product name can not be more than 50 characters']
       },
       productID:{
              type: Number,
              required: [true, 'Please enter product ID'],
              unique: true,
              trinm: true,
              maxlength: [15, 'product ID can not be more than 15 integers']
       },
       categoryInfo: {
              type: mongoose.Schema.ObjectId,
              ref: 'Category',
              required: true
       }
       
})


module.exports = mongoose.model('Products', ProducteSchema)

