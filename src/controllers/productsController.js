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
    sell: (req , res) => {
        res.render('upload')
    },
    refresh: (req , res) =>{
        res.render('refresh')
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
            }
        })
        .then(response => {
            // res.send(response)
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
        db.Users.findAll(1, {
            include: ['product'],
            raw: true,
            nest: true
        })
        .then( result => {
            res.send(result)
        })
        .catch(error => {
            res.send(error)
        })
    }
}