//Importamos  express
const express = require('express');
//importar funcion de controlador
const { getBooks } = require('./controller/books.js');
//creamos ruta
const routerBooks = express.Router();

//utilizamos la ruta basica
routerBooks.get('/books', getBooks);

routerBooks.post('/book', );

routerBooks.put('/book', (req,res) => {
    //modificar un libro
    res.send('About birds');
});

routerBooks.delete('/book', (req,res) => {
    //eliminar un libro
    res.send('About birds');
});