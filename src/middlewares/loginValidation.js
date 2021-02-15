function loginVal(req,res,next){
    if ( req.session.email == undefined ){
        
        return next();
        
    }
}

module.exports = loginVal;
