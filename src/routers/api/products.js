const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/apiProductController')


router.get('/', apiProductController.allProducts)
router.get('/:id' , apiProductController.category)
router.get('/one/:id', apiProductController.specificProduct)



module.exports = router;