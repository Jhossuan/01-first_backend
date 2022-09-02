const { Router } = require('express')
const router = Router()

const { createUsuario, getUsuario, getUsuarios , deleteUsuario, updateUsuario } = require('../controller/usuario.controller')

router.route('/get')
    .get(getUsuarios)

router.route('/add')
    .post(createUsuario)

router.route('/user/:id')
    .get(getUsuario)

router.route('/delete/:id')
    .delete(deleteUsuario)

router.route('/update/:id')
    .put(updateUsuario)

module.exports = router;