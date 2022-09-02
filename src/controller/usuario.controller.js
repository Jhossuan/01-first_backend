const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        res.status(404).send({message:'Usuarios no encontrados'})
    }
}

usuarioCtrl.createUsuario = async(req, res) => {
    try {
        const {nombre, apellido, correo, telefono, edad} = req.body;
        const nuevoUsuario = new Usuario({
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            telefono:telefono,
            correo:correo,
        })
        await nuevoUsuario.save();
        res.json({message:'El usuario ha sido creado correctamente'})
    } catch (error) {
        res.status(404).send({message:'No se ha creado el usuario'})
    }
}

usuarioCtrl.getUsuario = async(req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.status(404).send({message:'Usuario no encontrado'})
    }
}

usuarioCtrl.deleteUsuario = async(req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message:'Usuario eliminado'})
}

usuarioCtrl.updateUsuario = async(req, res) => {
    try {
        const { nombre, apellido, correo, telefono, edad } = req.body
        await Usuario.findByIdAndUpdate(req.params.id, {
            nombre,
            apellido,
            edad,
            telefono,
            correo
        })
        res.json({message:'Usuario actualizado'})
    } catch (error) {
        res.status(404).send({message:'Usuario NO actualizado'})
    }
}

module.exports = usuarioCtrl