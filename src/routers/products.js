const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.productList);

router.get('/:id', productsController.product)

module.exports = router;