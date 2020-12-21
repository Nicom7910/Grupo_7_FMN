const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function (req,res){
    
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname, './login.html'))

})

app.get('/carrito', function(req,res){
    res.sendFile(path.join(__dirname, './carrito.html'))

})
app.get('/listado', function(req,res){
    res.sendFile(path.join(__dirname, './listado.html'))

})
app.get('/producto', function(req,res){
    res.sendFile(path.join(__dirname, './producto.html'))
})

app.listen(3000, function(){
    console.log("El servidor esta corriendo en el servidor 3000")
})