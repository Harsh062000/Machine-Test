const Products = require('../model/Products')

//GET all producte
exports.getAllProducte = async (req, res, next) => {
       let query;

       //copy req.query
       const reqQuery = {...req.query};

       //fileds to exclude
       const removeFields = ['page', 'limit']; 

       //loop over removeFields and delete them from reqQuery
       removeFields.forEach(param => delete reqQuery[param])

       //
       query = Products.find().populate('categoryInfo');

       //pagination
       const page = parseInt(req.query.page, 10) || 1;
       const limit = parseInt(req.query.limit, 10) || 20;
       const startIndex = (page - 1) * limit;
       const endIndex = page * limit;
       const total = await Products.countDocuments();

       query = query.skip(startIndex).limit(limit);

       //
       const data = await query;

       //pagination result
       const pagination = {};

       if(endIndex < total){
              pagination.next = {
                     page: page + 1,
                     limit
              }
       }
       if(startIndex > 0){
              pagination.prev = {
                     page: page - 1,
                     limit
              }
       }
       
       try{
              res.status(200).json({
                     success: true,
                     length: data.length,
                     pagination,
                     data: data
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

//GET  producte
exports.getProducte = async (req, res, next) => {
       let quesry = Products.findById(req.params.id);
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

//POST producte
exports.ceratProducte = async (req, res) => {
       const product = await Products.create(req.body);

       try{
              res.status(201).json({
                     success: true,
                     data: product
              })
       }catch(err){
              res.status(401).json({
                     success: false,
                     message: err.message
              })
       }
}

//PUT producte
exports.updateProducte = async (req, res) => {
       const producte = await Products.findByIdAndUpdate(req.params.id, req.body,{
              new: true
       })
       try{
              res.status(200).json({
                     success: true,
                     data: producte
              })
       }catch(err){
              res.status(400).json({
                     success: false,
                     message: err.message
              })
       }
}

//DELETE producte
exports.deleteProducte = async (req, res) => {
       const product = await Products.findByIdAndDelete(req.params.id)
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

