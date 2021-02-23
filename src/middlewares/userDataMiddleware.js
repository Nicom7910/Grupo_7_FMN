module.exports = (req, res, next) => {
    console.log(req.session)
    if(req.session.user != undefined){
        res.locals.user = req.session.user
    }
    next();
}
