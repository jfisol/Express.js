const {Model, DataTypes,} = require('sequelize');
const {dbInstance} = require('../db/sequelize-config');

class User extends Model {

};

User.init({
 id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
 },
 name: {
     type: DataTypes.STRING,
     allowNull:false//no permite nulos
 },
 lastname:{
    type: DataTypes.STRING,

 },
 email:{
    type: DataTypes.STRING
 }
},{
    sequelize: dbInstance,
    modelName: 'User',
    createdAt:false,//significa creado a tal hora
    updatedAt: false//actualizado a tal hora
});

module.exports = {User}