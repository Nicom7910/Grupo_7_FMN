const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const registerValidation = require('../middlewares/registerValidation')

router.get('/', indexController.home);

router.get('/carrito', indexController.carrito);

router.get('/login', indexController.login);

router.get('/register', indexController.register);
router.post('/register', registerValidation, indexController.createUser);



module.exports = router;