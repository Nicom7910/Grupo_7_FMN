const { check , body } = require('express-validator');
const path = require('path')

module.exports = [
    check('productName').isLength( {min: 10 , max: 100} ).withMessage("El titulo debe de tener entre 10 y 100 caracteres."),
    check('description').isLength( {min: 100 , max: 2000} ).withMessage('La descripcion tiene que tener entre 100 y 2000 caracteres.'),
    check('stock')
        .notEmpty().withMessage('Tenés que poner un stock')
        .custom(value => {
            if (value <= 0) {
                throw new Error('No se puede ingresar un stock negativo o igual a 0')
            }else {
                return true
            }
        }),
    check('price')
        .notEmpty().withMessage('Tenés que poner un precio')
        .custom(value => {
            if (value <= 0) {
                throw new Error('No se puede ingresar un precio negativo o igual a 0')
            }else {
                return true
            }
        }),
    check('category_id')
        .notEmpty().withMessage('Tenés que elegir una categoría'),
    check('manufacturer_id')
        .notEmpty().withMessage('Tenés que elegir una categoría'),
]