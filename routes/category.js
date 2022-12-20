const express = require('express');
const router = express.Router();

const {getAllCategory,
       getCategory,
       ceratCategory,
       updateCategory,
       deleteCategory
} = require('../collector/category')

router.route('/')
.get(getAllCategory)
.post(ceratCategory)

router.route('/:id')
.get(getCategory)
.put(updateCategory)
.delete(deleteCategory)


module.exports = router
