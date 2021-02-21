const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

const registerValidation = require('../middlewares/registerValidation');
const multerRegister = require('../middlewares/multerRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const cookieAuthMiddleware = require('../middlewares/cookieAuthMiddleware');
const userDataMiddleware = require('../middlewares/userDataMiddleware');

router.get('/', userDataMiddleware, indexController.home);

router.get('/carrito', userDataMiddleware,indexController.carrito);

router.get('/cuenta', userDataMiddleware,indexController.account)

router.get('/login' ,guestMiddleware, indexController.login);
router.post('/login' , indexController.checkUser);

router.get('/register', indexController.register);
router.post('/register', multerRegister, indexController.createUser);



module.exports = router;
