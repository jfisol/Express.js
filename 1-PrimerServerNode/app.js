/*app.js*/
//declaramos una variable http
const http = require('http');

//importamos los cursos de cursos.js
const {cursos} = require('./cursos');


//Creamos el servidor
const servidor = http.createServer((req,res) => {
const {method} = req; //sustraemos la propiedad metodo 200 ok esta por defecto

switch(method){
 case 'GET':
 return mensajeSolicitudGET(req,res);
 case 'POST':
 return mensajeSolicitudPOST(req,res);
 
 default: 
 res.statusCode =501;
 res.end(`el metodo no puede ser procesado por el servidor ${method}`);
}

});

//Definir funcion mensajeSolicitudGET
function mensajeSolicitudGET(req,res){
const path = req.url;//ver la ruta
console.log(res.statusCode);//ver el codigo de estado de la respuesta por default

if(path === '/'){
    
//res.statusCode=200;
return res.end('Bienvenidos a mi primer servidor y API creados en node');

}else if(path === '/cursos'){
//res.statusCode= 200;
res.writeHead(200, {'Content-Type': 'aplication/json'});
return res.end(JSON.stringify(cursos));//stringify metodo que convierte en formato json

}else if(path === '/cursos/programacion'){
    //res.statusCode=200;
    return res.end(JSON.stringify(cursos.programacion));//stringify metodo que convierte en formato json
  }

  //res.statusCode = 404;
  return res.end(`El recurso solicitado no existe`);
}

//Manejar solicutud POST
function mensajeSolicitudPOST(req,res){

  const path = req.url;
  if(path ==='/cursos/programacion'){
   // res.statusCode = 200;
   let cuerpo =' ';
   req.on('data', contenido => {
    cuerpo += contenido.toString();
   });
   req.on('end', () => {
    console.log(cuerpo);
    console.log(typeof cuerpo); 

    cuerpo = JSON.parse(cuerpo);//convirtiendo a objetos js
    console.log(typeof cuerpo); 
    console.log(cuerpo.titulo); 

    res.end('El servidor recibio una peticion POST para /cursos/programacion'); 
  });


  // return res.end('El servidor recibio una peticion POST para /cursos/programacion'); 

  }

}

//declaramos el puerto de escucha
const PORT = 3000;
servidor.listen(PORT,()=>{
console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});

