const db = require('../database/models/index');
const fs = require('fs');
const path = require('path');

const {validationResult} = require('express-validator');

module.exports = {
    home: (req, res) => {
        db.Product.findAll()
        .then(response => {           
            res.render('admin', {response})
        })
        .catch(error => {
            res.send(error)
        })
    },
    upload: (req, res) => {
        db.Manufacturer.findAll()
        .then(response => {
            res.render('upload', {response})
        })
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.create({
                name: req.body.productName,
                description: req.body.description,
                photo: req.file.filename,
                stock: req.body.stock,
                price: req.body.price,
                manufacturer_id: req.body.manufacturer_id,
                category_id: req.body.category_id,
            })
                .then( response => {
                    return res.redirect('/admin')
                })
        }else {
            db.Manufacturer.findAll()
            .then(response => {
                return res.render( 'upload' , {errors: errors.mapped(), response})
            })
        }
    },
    update: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(response => {
            //guardamos la ruta de la foto para despues poder eliminarla o cambiarla de ser necesario
            req.session.updateProduct = {
                photo: response.photo,
            }
            //aca consultamos todos los proveedores para que el admin los pueda seleccionar
            db.Manufacturer.findAll()
            .then( (manufacturer)=> {
                res.render('refresh',{response, manufacturer})
            })
        })
    },
    change: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.update({
                name: req.body.productName,
                description: req.body.description,
                stock: req.body.stock,
                photo:  (typeof req.file == 'undefined')? req.session.updateProduct.photo : req.file.filename,
                price: req.body.price,
                manufacturer_id: req.body.manufacturer_id,
                category_id: req.body.category_id,
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((response)=> {
                //si admin actualiza foto, borramos la anterior
                if (typeof req.file != 'undefined') {
                    fs.unlink(path.join(__dirname, `../../public/upload/products/${req.session.updateProduct.photo}`), (err) =>{
                        res.redirect(`/admin/actualizar/${req.params.id}`)
                    })
                } else {
                    res.redirect(`/admin/actualizar/${req.params.id}`)
                }
            })
        }else {
            db.Product.findByPk(req.params.id)
            .then(response => {
                req.session.updateProduct = {
                    photo: response.photo,
                }
                db.Manufacturer.findAll()
                .then( (manufacturer)=> {
                    res.render('refresh',{response, manufacturer, errors: errors.mapped()})
                })
            })
        }
    },
    remove: (req, res) => {
        //buscamos el producto para poder guardar el path de la foto y poder borrarla
        db.Product.findByPk(req.params.id)
        .then(response => {
            let photoPath = response.photo;
            fs.unlink(path.join(__dirname, `../../public/upload/products/${photoPath}`), (err) =>{
                db.Product.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then( ()=> {
                    res.redirect('/admin')
                })
            })
        })
    } 
}