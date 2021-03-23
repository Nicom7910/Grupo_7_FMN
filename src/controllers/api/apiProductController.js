const db = require('../../database/models/index')

module.exports = {
    allProducts: (req, res) => {
        db.Product.findAll({
            include: [{association: 'category'}, {association: 'manufacturer'}]
        })
        .then(response => {
            res.json({
                meta: {
                    status: 200,
                    total: response.length
                },
                data: response
            })
        })
    },
    specificProduct: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(response => {
            if(response){
                res.json({
                    meta: {
                        status: 200
                    },
                    data: response
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
    category: (req, res) => {
        db.Product.findAll({
            where: {
                category_id: req.params.id
            }
        })
        .then( response => {
            res.json(response)
        })
    }
}