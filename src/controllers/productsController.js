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
        .then(function(listado){
            //return res.send(req.query)
            if (listado.length>0) {
                return res.render('listado-especifico', {
                    listado: listado,
                    busqueda: req.query.search
                })
            }
            else{
                return res.send('No existe la busqueda');
            }
        })
        .catch(() =>res.send("Esta mal"))
    },
    sell: (req , res) => {
        res.render('upload')
    },
    refresh: (req , res) =>{
        res.render('refresh')
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
    peripherals: (req, res) => {
        res.render('listado-especifico')
    },
    mobiles: (req, res) => {
        res.render('listado-especifico')
    }
}