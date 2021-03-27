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
            response.map( (index, position, array) => {
                if (countByCategory[index.category.category] == undefined) {
                    countByCategory[index.category.category] =1
                }else {
                    countByCategory[index.category.category] = countByCategory[index.category.category] + 1
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
            include: [{association: 'category'}, {association: 'manufacturer'}]
        })
        .then( response => {
            res.json({
                meta: {
                    status: 200
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
                    categories
                }
            })
        })
    }
}