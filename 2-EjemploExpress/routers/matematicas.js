
//Importamos express
const express = require('express');

//importar cursos
const {matematicas} = require('../cursos/cursos.js').infoCursos;

//crear ruta
const routerMatematicas = express.Router();

//Procesar la informacion en formato JSON para uso del metodo post
//MIDDLEWARE
routerMatematicas.use(express.json());//permite procesar el cuerpo en formato json y poder trabajar con los datos de la bd

//ruta para cursos 
routerMatematicas.get('/', (req,res) => {
    res.send(matematicas);
});


routerMatematicas.get('/:tema',(req,res) => {
   const tema = req.params.tema;
   const respuesta = matematicas.filter(curso=>curso.tema === tema);
   
   if(respuesta.length === 0 ){
    return res.status(404).send(`El titulo ${tema} no esta en la biblioteca`);
   }

   res.send(JSON.stringify(respuesta));
});


//Metodo Post: este tipo de solicitudes se realiza desde el cliente
routerMatematicas.post('/',(req,res)=>{
    const cursoNuevo = req.body;
    matematicas.push(cursoNuevo);//se agrega el nuevo objeto en json 
    res.send(JSON.stringify(matematicas));//se envia al cliente el nuevo objeto
});

//PUT: metodo que permite actualizar la informacion, se tienen que actualizar todos los atributos

routerMatematicas.put('/:id',(req,res) => {
   const cursoActualizado = req.body;
   const id = req.params.id; //extraemos la entidad del curso
   const indice =matematicas.findIndex(curso => curso.id == id);

   if(indice >=0){
    matematicas[indice] = cursoActualizado;
   }

   res.send(JSON.stringify(matematicas));
});
//patch especifica solo las propiedades que se quieran cambiar
routerMatematicas.patch('/:id',(req,res) => {
    const infoActualizado = req.body;
    const id = req.params.id; //extraemos la entidad del curso
   // const titulo = req.params.titulo;
   // const vistas = req.params.titulo;
    
    const indice =matematicas.findIndex(curso => curso.id == id);
 
    if(indice >=0){
     const cursoModificar = matematicas[indice];
     Object.assign(cursoModificar,infoActualizado);// (objeto a modificar,objeto que tiene propiedades y valores)
    }
 
    res.send(JSON.stringify(matematicas));
 });

//delete eliminar un atributo 
routerMatematicas.delete('/:id',(req,res) => {
    const infoActualizado = req.body;
    const id = req.params.id;
    const indice =matematicas.findIndex(curso => curso.id == id);
    if(indice >=0){
     matematicas.splice(indice,1);
    }
    
    res.json(matematicas);
});

module.exports = routerMatematicas;