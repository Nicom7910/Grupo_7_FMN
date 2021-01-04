const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.carrito);

router.get('/carrito', function (req,res){    
    res.render('carrito')
});

router.get('/login', function (req,res){    
    res.render('login')
});



module.exports = router;