const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud');

const objetobd = mongoose.connection;

objetobd.on('connected', () => {
    console.log("Conexión exitosa a MongoDB")
})
objetobd.on('error', () => {
    console.log("Error en la conexión a MongoDB")
})

module.exports = mongoose;