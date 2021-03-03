const db = require('../database/models/index');

module.exports = {
    home: (req, res) => {
        db.Product.findAll()
        .then(response => {
            res.render('admin', {response})
        })
    },
    upload: (req, res) => {
        res.render('upload')
    },
    create: (req, res) => {
        db.Product.create({
            name: req.body.productName,
            description: req.body.description,
            photo: req.file.filename,
            stock: req.body.stock,
            manufacturer_id: req.body.manufacturer_id,
            category_id: req.body.category_id,
        })
            .then( response => {
                res.redirect('/admin/crear')
            })
    },
    update: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(response => {
            
            res.render('refresh',{response})
        })
    },
    change: (req, res) => {
        db.Product.update({
            name: req.body.productName,
            description: req.body.description,
            stock: req.body.stock,
            manufacturer_id: req.body.manufacturer_id,
            category_id: req.body.category_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then((response)=> {
            res.redirect(`/admin/actualizar/${req.params.id}`)
        })
    } 
}