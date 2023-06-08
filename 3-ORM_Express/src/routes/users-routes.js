const express = require('express'); //importamos express
const router = express.Router()//permite importar las rutas
const userController = require('../controllers/user-controller')


router.get('/obtener-todos',userController.getAllUsers);
router.get('/obtener-por-id/:id',userController.getUserById);
router.post('/crear',userController.createUser);
router.put('/editar/:id',userController.editUser);
router.delete('/eliminar/:id',userController.deleteUser);
module.exports = router;