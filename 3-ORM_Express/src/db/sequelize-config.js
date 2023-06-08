const { Sequelize } = require('sequelize'); //importar la libreria sequelize
//creainstancia de conexion
const dbInstance = new Sequelize({
    host: 'localhost',
    database: 'xAcademuSequelize',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    username:'root',
    password:'root',
    port: 3306,
    dialect:'mysql'
});

module.exports = { dbInstance }