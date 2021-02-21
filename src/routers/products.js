const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const userDataMiddleware = require('../middlewares/userDataMiddleware');


router.get('/', userDataMiddleware,productsController.productList);

router.get('/vender' , productsController.sell);
router.get('/actualizar' , productsController.refresh)

router.get('/videojuegos', userDataMiddleware, productsController.videogames);
router.get('/celulares', userDataMiddleware, productsController.mobiles);
router.get('/perifericos', userDataMiddleware, productsController.peripherals);

router.get('/:id', userDataMiddleware, productsController.product);



module.exports = router;