const db = require('../database/models/index');

db.User
module.exports = (req, res, next) => {

    db.User.findByPk(req.session.user.id)
    .then(response => {
        (response.admin == 'admin')? next() : res.redirect('/') 
    })
}