const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/apiProductController')


router.get('/', apiProductController.allProducts);
router.get('/categories', apiProductController.allCategories)
router.get('/one/:id' , apiProductController.oneProduct);
router.get('/categories/:id', apiProductController.productsByCategory);
router.get('/search' , apiProductController.search)
router.get('/cart' , apiProductController.cart)


module.exports = router;