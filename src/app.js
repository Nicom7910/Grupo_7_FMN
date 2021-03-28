const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');
const userDataMiddleware = require('./middlewares/userDataMiddleware')

const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const adminRouter = require('./routers/admin');
const apiProductsRouter = require('./routers/api/products');
const apiUserRouter = require('./routers/api/users');
let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , './views'));

app.use(session( {secret: 'Welcome To Jamrock'}));
app.use(cookieParser());
app.use(cookieAuthMiddleware);
app.use(userDataMiddleware);

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(express.static( path.join(__dirname, '../public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES
app.use('/' , indexRouter);
app.use('/productos' , productsRouter);
app.use('/admin' , adminRouter);

//API
app.use('/api/products' , apiProductsRouter)
app.use('/api/users', apiUserRouter)
/*
 app.listen(3000, function(){
     console.log("El servidor esta corriendo en el servidor 3000 http://localhost:3000")
     console.log("http://localhost:3000")
});
*/
app.listen(port, () => console.log(`El servidor esta corriendo en el puerto ${port}`))