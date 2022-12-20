const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
       categoryName: {
              type: String,
              required: [true, 'Please add category name'],
              unique: true,
              trinm: true,
              maxlength: [50, 'Category Name can not be more than 50 characters']
       },
       categoryID:{
              type: Number,
              required: [true, 'Please enter category ID'],
              unique: true,
              trinm: true,
              maxlength: [15, 'Category ID can not be more than 15 integers']
       }

       
})



module.exports = mongoose.model('Category',CategorySchema)
