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

app.get('/register', function(req,res){
    res.sendFile(path.join(__dirname, './register.html'))

})
app.get('/carrito-compras', function(req,res){
    res.sendFile(path.join(__dirname, './carrito-compras.html'))

})
app.get('/productos', function(req,res){
    res.sendFile(path.join(__dirname, './productos.html'))

})
app.get('/detalles-producto', function(req,res){
    res.sendFile(path.join(__dirname, './detalles-producto.html'))

})

app.listen(3000, function(){
    console.log("El servidor esta corriendo en el servidor 3000")
})