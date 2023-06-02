//Importamos Express
const express = require('express');

//retorna una aplicacion de express
const app = express();

//Importamos cursos (Funciona como nuestra BD)
const {infoCursos} = require('./cursos/cursos.js');

//Routers
//Programacion
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion); //se le dice a la app de express que use un camino especifico y se lo asigne a los routers 

//Matematicas
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

//routing
app.get('/', (req,res) => {
    res.send('Mi Primer servidor con Express');
});

app.get('/api/cursos', (req,res) => {
      res.send(infoCursos);
});


//declaramos el puerto
const PUERTO= process.env.PORT || 3000; //procces.env.port da por default el valor del puerto que esta definido

app.listen(PUERTO,  () => {

    console.log(`EL servidor esta escuchando ${PUERTO}`);
});
