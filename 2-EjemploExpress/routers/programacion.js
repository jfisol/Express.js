//Importamos Express
const express = require('express');

//importamos los cursos

const {programacion} = require('../cursos/cursos.js').infoCursos;
//Routers
const routerProgramacion = express.Router();

routerProgramacion.get('/', (req,res) => {
    res.send(programacion);
});

//acceder a los objetos con parametros query
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;//lenguaje nombre que se agrego en el path
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultado.length === 0){
     return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }  // Ordenar por número de vistas
  if (req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)));//ordena las visvas de < a >
  } 
    res.send(JSON.stringify(resultado));

});
/*routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
    
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    } 
    
    if (req.query.ordenar === 'vistas') {
      return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados));
  });*/

routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
    const lenguaje = req.params.lenguaje;//lenguaje nombre que se agrego en el path
    const nivel = req.params.nivel;
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultado.length === 0){
     return res.status(404).send(`No se encontraron cursos de ${lenguaje} nivel ${nivel}`)
    }
    res.send(JSON.stringify(resultado));
    
});

module.exports = routerProgramacion;