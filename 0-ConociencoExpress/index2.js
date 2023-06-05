//Importamos  express
const express = require('express');
//const { param } = require('../2-EjemploExpress/routers/matematicas');

//usamos express
const app = express();

app.use(express.json);

//utilizamos un metodo del objeto app
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Escuchando en el puresto ${PORT}`);
});//