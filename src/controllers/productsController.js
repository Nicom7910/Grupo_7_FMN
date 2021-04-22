const db = require('../database/models/index');

//vemos si se aplica algún filtro a la busqueda para después pasarlo a sequelize
const productFilter = (query) => {
            if(query.price != undefined){
                switch (query.price){
                    case 'DESC':
                        return ['price', 'DESC']
                    case 'ASC': 
                         return ['price', 'ASC']
                }
            }else if (query.created != undefined){
                switch (query.created){
                    case 'DESC':
                        return ['created_at', 'DESC']
                    case 'ASC':
                        return ['created_at', 'ASC']
                }
            }else {
                return ['created_at', 'ASC']
            }
} 

module.exports = {
    productList: (req , res) =>{
        db.Product.findAll()
        .then(response => {
            res.render('listado', {response})
        })
    },
    product: (req , res) => {
        // fetch(`http://fmnelectronica.xyz/api/products/one/${req.params.id}` , {method: 'GET'})
        // .then(response => response.json())
        // .then(response => res.render('producto', {response: response.data.product}) )
        // .catch(err => {console.log(err)})
        db.Product.findOne({
            include: [{association: 'manufacturer'}],
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            res.render('producto', {response})
        })
    },
    search: function(req, res) {
        //guardamos en sesion el producto buscado
        (req.query.search != undefined)? req.session.searchedProduct = req.query.search : '';
        db.Product.findAll({
            include: [{association: 'category'}],
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.session.searchedProduct + '%',
                },
            },
            order: [
                productFilter(req.query)
            ]
        })
        .then(function(response){
            //borramos de la session el producto buscado
            return res.render('listado-especifico', {
                response: response,
                busqueda: req.session.searchedProduct
            })
        })
    },
    mobiles: async (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 1
            },
            order: [
                productFilter(req.query)
            ]
        })
        .then(response => {
            res.render('listado-especifico', {response})
        })
        .catch(err => res.send(err))

    },
    peripherals: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 2
            },
            order: [
                productFilter(req.query)
            ]
        })
        .then(response => {
            res.render('listado-especifico', {response})
        })
        .catch(err => res.send(err))
    },
    videogames: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: 3
            },
            order: [
                productFilter(req.query)
            ]
        })
        .then(response => {
            res.render('listado-especifico', {response})
        })
        .catch(err => res.send(err))
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
    },
}