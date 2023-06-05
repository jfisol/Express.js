//importamos las funciones de bookServices
const { getBooksFormatDB, insertBooksInFormatDB} = require ('./bookService/bookService.js')

//funcion que obtenga todos los libros 
export function getBooks(req,res) {
    const listadoLibros= getBooksFormatDB();
    //Retornamos un listado de libros
   return res.status(200).send(listadoLibros);
}


//funcion que crea un libro
export function postBooks(req, res){
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const editorial = req.body.editorial;
//llama a la funcion
insertBooksInFormatDB(codigo,nombre,editorial);
    
    return res.status(200).send('Libro Creado Correctamente');
}