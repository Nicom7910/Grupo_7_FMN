const db = require('../../database/models/index')

module.exports = {
    allProducts: (req, res) => {
        db.Product.findAll({
            include: [{association: 'category'}, {association: 'manufacturer'}]
        })
        // .then(response=> {res.json(response)})
        .then(response => {

            let countByCategory = {}

            //con esto podemos agregar según las categorías, la cantidad de productos
            response.map( (val, position, array) => {
                if (countByCategory[val.category.category] == undefined) {
                    countByCategory[val.category.category] =1
                }else {
                    countByCategory[val.category.category] = countByCategory[val.category.category] + 1
                }
            })

            res.json({
                meta: {
                    status: 200,
                },
                data: {
                    count: response.length,
                    countByCategory,
                    products: response
                }
            })
        })
    },
    oneProduct: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'manufacturer'}]
        })
        .then(response => {
            if(response){
                res.json({
                    meta: {
                        status: 200
                    },
                    data: {
                        product: response
                    }
                })
            }else {
                res.json({
                    meta: {
                        status: 400,
                        err: 'not found',
                    }
                })
            }

        })
        .catch(err => {
            res.json({
                meta: {
                    status: error,
                    msg: err
                }
            })
        })
    },
    productsByCategory: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: req.params.id
            },
            include: [{association: 'category'}, {association: 'manufacturer'}],
        })
        .then( response => {
            res.json({
                meta: {
                    status: 200,
                    order: req.query.price
                },
                data: {
                    products: response,
                }
            })
        })
    },
    allCategories: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.json({
                meta: {
                    status: 200
                },
                data: {
                    countCategories: categories.length,
                    categories
                }
            })
        })
    },
    search: (req, res) => {
        db.Product.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then( products => {
            if (products.length > 0) {
                res.json({
                    meta: {
                        status: 200
                    },
                    data: {
                        products
                    }
                })
            }else{
                res.json({
                    meta: {
                        status: 400,
                        msg: "Could not find any product"
                    }
                })
            }
        })
    },
    cart: (req, res) => {

    }
}