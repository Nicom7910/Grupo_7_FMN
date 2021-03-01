const db = require('../database/models/index')

module.exports = (req, res, next) =>{
    db.Users.findOne({
        where: {
            email: req.session.email
        }
    })
    .then(user =>{
        if(user.admin != 'null'){
            next()
        }else{
            res.redirect('/cuenta')
        }
    })  
       
}