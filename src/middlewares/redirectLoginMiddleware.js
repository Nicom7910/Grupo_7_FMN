module.exports = (req, res, next) => {
    if(req.session.user != undefined){
        return next();
    }
    else {
        return res.redirect('/login')
    }
}