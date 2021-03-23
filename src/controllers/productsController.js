const { response } = require('express');
const db = require('../database/models/index')

module.exports = {
    productList: (req , res) =>{
        (req.query.search != undefined)?res.locals.search = req.query.search:'';
        res.render('listado')
    },
    product: (req , res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            res.render('producto', {response})
        })
    },
    search: function(req, res) {
        //return res.send(req.query)
        db.Product.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then(function(response){
            //return res.send(req.query)
            return res.render('listado-especifico', {
                response: response,
                busqueda: req.query.search
            })
        })
    },
    mobiles: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 1
            }
        })
        .then(response => {
            // res.send(response)
            res.render('listado-especifico', {response})
        })
    },
    peripherals: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 2
            },
        })
        .then(response => {
            //res.send(response)
            res.render('listado-especifico', {response})
        })

    },
    videogames: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 3
            }
        })
        .then(response => {
            // res.send(response)
            res.render('listado-especifico', {response})
        })
    },
    addToCart: (req, res) => {
        //buscamos si el producto existe en el carrito del usuario
        db.Sale.findOne({
            where: {
                product_id: req.params.id,
                user_id: req.session.user.id
            }
        })
        .then(response => {
            if (response) {
                //ya esta este producto en el carrito
                db.Sale.update({
                    quantity: (response.quantity+1)
                },{
                    where: {
                        id: response.id
                    }
                })
                .then(updated => {
                    res.redirect('/carrito')
                })
            }else {
                //el producto no está en el carrito
                db.Sale.create({
                    user_id: parseInt(req.session.user.id),
                    product_id: parseInt(req.params.id),
                    quantity: 1
                })
                .then( response => {
                    res.redirect('/carrito')
                })
                .catch(error => {
                    res.send(error)
                })
            }
        })
        .catch(err=>{console.log(err)})
    }
}