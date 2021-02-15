function loginVal(req,res){
    if ( req.session.email == undefined ){
        return res.redirect('/login');
    }
    else {
        res.send("Usuario Logueado")
        //res.redirect('/');
    }
}

module.exports = loginVal;