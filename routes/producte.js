const express = require('express');
const router = express.Router();

const {getAllProducte,
       getProducte,
       ceratProducte,
       updateProducte,
       deleteProducte
       } = require('../collector/productes')



router.route('/')
.get(getAllProducte)
.post(ceratProducte)

router.route('/:id')
.get(getProducte)
.put(updateProducte)
.delete(deleteProducte)

module.exports = router
