const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.productList);

router.get('/vender' , productsController.sell);
router.get('/actualizar' , productsController.refresh)

router.get('/videojuegos', productsController.videogames);
router.get('/celulares', productsController.mobiles);
router.get('/perifericos', productsController.peripherals);

router.get('/:id', productsController.product);



module.exports = router;