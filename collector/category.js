const Category = require('../model/Category')
//const data = require('../category.json')

//GET all category
exports.getAllCategory = async (req, res, next) => {
       let quesry = Category.find();
       const data = await quesry;
       
       try{
              res.status(200).json({
                     success: true,
                     length: data.length,
                     data: data
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

//GET single category
exports.getCategory = async (req, res, next) => {
       let quesry = Category.findById(req.params.id);
       const data = await quesry;
       
       try{
              res.status(200).json({
                     success: true,
                     data: data
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

//POST category
exports.ceratCategory = async (req, res) => {
       const category = await Category.create(req.body);

       try{
              res.status(201).json({
                     success: true,
                     data: category
              })
       }catch(err){
              res.status(401).json({
                     success: false,
                     message: err.message
              })
       }
}

//PUT category
exports.updateCategory = async (req, res) => {
       const category = await Category.findByIdAndUpdate(req.params.id, req.body,{
              new: true
       })
       try{
              res.status(200).json({
                     success: true,
                     data: category
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

//DELETE category
exports.deleteCategory = async (req, res) => {
       const category = await Category.findByIdAndDelete(req.params.id)
       try{
              res.status(200).json({
                     success: true,
                     data: {}
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

