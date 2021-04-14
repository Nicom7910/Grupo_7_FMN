const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const userDataMiddleware = require('../middlewares/userDataMiddleware');
const redirectLoginMiddleware = require('../middlewares/redirectLoginMiddleware')


router.get('/', userDataMiddleware, productsController.productList);
router.get('/search', productsController.search);

router.get('/gaming', userDataMiddleware, productsController.videogames);
router.get('/celulares', userDataMiddleware, productsController.mobiles);
router.get('/perifericos', userDataMiddleware, productsController.peripherals);

router.get('/:id', userDataMiddleware, productsController.product);


router.post('/agregar/:id', redirectLoginMiddleware, productsController.addToCart);

module.exports = router;