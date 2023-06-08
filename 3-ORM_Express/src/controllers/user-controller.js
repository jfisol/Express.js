//crear un endpoint para definir todos los usuarios

const { Error } = require('sequelize');
const userService = require('../services/user-service'); //importamos userservice

//controlador procesa la peticion y envia la respuesta
async function getAllUsers(req,res){
const users = await userService.getAll();
 
res.status(200).send(users);//se envia la lista de usuarios
}

//obtener por id
async function getUserById(req,res,next){
    const { id } = req.params;
    try {
    const users = await userService.getById(id);
    res.status(200).send(users);//se envia la lista de usuarios
    } catch (error) {
       next(error);
              
    }
    
    
}
  //create users
async function createUser(req,res){
    const { name, lastname, email} = req.body;
    const users = await userService.createUser(name,lastname,email);
     
    res.status(201).send(users);//se envia la lista de usuarios

}  

//editar users
async function editUser(req,res){
    const { id } = req.params;
    const { name, lastname, email} = req.body;
    const users = await userService.editUser(id,name,lastname,email);
     
    res.status(201).send(users);//se envia la lista de usuarios

}  
//eliminar users
async function deleteUser(req,res){
    const { id } = req.params;
   await userService.deleteUser(id);
     
    res.status(201).send(`Usiario con el id # ${id} ha sido eliminado existosamente!`);//se envia la lista de usuarios

}  
module.exports = {getAllUsers, getUserById, createUser, editUser,deleteUser}