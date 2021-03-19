const { check } = require('express-validator');

module.exports = [
    check('nombre')
        .isLength( {min: 2} ).withMessage("El nombre debe tener mas de 2 caracteres.") ,
    check('email')
        .isEmail().withMessage('Tenés que ingresar un email valido.'),
    check('avatar')
        .isEmpty().withMessage('Debe elegir una imagen'),    
    check('password')
        .isLength( {min: 8} ).withMessage('La contraseña debe de tener mas de 8 caracteres.')
]