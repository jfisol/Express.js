///contiene la logica de negocio
//funcion para obtener todos los servicios
const { User } = require('../models/user-models');//importamos modelos
//obtener todos usuarios
async function getAll(){
  const listUsers= await User.findAll();//busca/lista todos los usuarios, retorna una promesa con la lista de users

  return listUsers;
}

//obtener usuarios por id
async function getById(id){
  const user= await User.findByPk(id);//busca/lista todos los usuarios, retorna una promesa con la lista de users
  if(user==null){
    throw new Error( `Usuario con id #${id} no encontrado`);
  }
  return user;
}

//crear usuarios
async function createUser(name,lastname,email){
  const user = new User()

  user.name = name
  user.lastname = lastname
  user.email = email

  const userCreated = await user.save();//metodo para guardar y devuelve promesa
  return userCreated;
}

//Editar usuarios
async function editUser(id,name,lastname,email){
  const user = await getById(id);

  if(name){
  user.name = name
  }
  if(lastname){
  user.lastname = lastname
  }
  if(email){
    user.email = email
  }
  const userEdited = await user.save();//metodo para guardar y devuelve promesa
  return userEdited;
}
//Editar usuarios
async function deleteUser(id){
  const user = await getById(id);//obtener usuario por id

await user.destroy();


}
module.exports = {getAll, getById, createUser,editUser,deleteUser}