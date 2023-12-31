const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, "../public")
const session = require('express-session');
const userLogMiddleware=require('./middlewares/userLogMiddleware')

let rutaUser = require ("./routes/users");
let rutaHome = require ("./routes/home");
let rutaCarrito = require ("./routes/carrito"); 
let rutaHistoria = require ("./routes/historia"); 
let rutaContacto = require ("./routes/contacto"); 
let rutaProductos = require ("./routes/products");
let rutaCategorias = require ('./routes/categorias')
const adminMiddleware = require("./middlewares/adminMiddleware");

const apiProductsRouter = require('./routes/api/productsAPI');
const apiUsersRouter = require('./routes/api/usersAPI');

app.use(express.static(publicPath))
app.use(session({
    secret: 'Nombre del sitio',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));




app.use(userLogMiddleware);
app.use(adminMiddleware)
app.set ("view engine", "ejs")
app.set ("views", path.join (__dirname,"../views"))

app.listen(3010, ()=> {
    console.log("Jarvis Iniciado en puerto 3010")
})

app.use (rutaHome);

app.use (rutaUser);

app.use (rutaProductos);

app.use (rutaCarrito);

app.use (rutaHistoria);

app.use (rutaContacto);

app.use (rutaCategorias);

app.use('/api/products',apiProductsRouter);
app.use('/api/users', apiUsersRouter);