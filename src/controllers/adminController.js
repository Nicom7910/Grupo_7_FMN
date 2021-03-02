const db = require('../database/models/index');



module.exports = {
    home: (req, res) => {
        db.Product.findAll()
        .then(response => {
            res.render('admin', {response})
        })
    },
    update: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(response => {
            
            res.render('refresh',{response})
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
    change: (req, res) => {
        res.send(req.body)
        // db.Product.update({
        //     name: req.body.productName
        // }, {
        //     where: {
        //         id: 2
        //     }
        // })
        // res.redirect(`/admin/actualizar/${req.params.id}`)
    } 
}