//archivo principal donde empieza el programa

const express = require('express'); //importamos
const userRoutes = require('./src/routes/users-routes');//importamos rutas
const { errorHandlerMiddleware} = require('./middlewares/error-handler');//importar middleware
const app = express();//inicializamos
const PORT =3000; //asignamos puesto


app.use(express.json());//para poder parsear bien el cuerpo de las peticiones
app.use('/users',userRoutes);//establece el prefijo de la peticion redireccione a las distintas rutas
app.use(errorHandlerMiddleware);
app.listen(PORT,(req,res) =>{
   console.log(`API express corriendo en el puerto ${PORT}`);
});