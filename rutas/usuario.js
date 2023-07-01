const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema

const esquemausuario = new esquema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})


const ModeloUsuario = mongoose.model('usuarios', esquemausuario);

module.exports = router;

router.post('/agregarusuario', (req,res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save()
        .then(doc => {
            res.send("Creado")
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find()
    .then(docs => {
        res.send(docs)
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario})
    .then(docs => {
        res.send(docs)
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/actualizausuario', (req,res) => {
    ModeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    })
    .then(docs => {
        res.send('Usuario actualizado corectamente')
    })
    .catch(err => {
        res.send(err)
    })    
})


router.post('/borrarusuario', (req,res) => {
    ModeloUsuario.findOneAndDelete({idusuario: req.body.idusuario})
    .then(docs => {
        res.send('Usuario eliminado')
    })
    .catch(err => {
        res.send(err)
    })    
})