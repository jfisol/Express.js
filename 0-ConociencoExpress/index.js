//Importamos  express
const express = require('express');
const { param } = require('../2-EjemploExpress/routers/matematicas');

//usamos express
const app = express();

//enviamos respuesta con get

app.get('/', (req,res) => {
    res.status(400).sendFile("/home/julio/Escritorio/Backup/Nodejs/Express.js/0-ConociencoExpress/index.html");
});

//post
app.post('/requestPost',(req,res) => {
  const cuertoSolicitud = req.body;
  console.log(cuertoSolicitud.nombre);

  if(!cuertoSolicitud.nombre){
      res.status(200).send('Falta llenar el campo nombre');
  }
res.send('recibido');
});



//utilizamos un metodo del objeto app
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Escuchando en el puresto ${PORT}`);
});//