//Importamos  express
const express = require('express');

//usamos express
const app = express();

//enviamos respuesta con get

app.get('/', (req,res) => {
    res.sendFile("/home/julio/Escritorio/Backup/Nodejs/Express.js/0-ConociencoExpress/index.html");
});

//utilizamos un metodo del objeto app
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Escuchando en el puresto ${PORT}`);
});