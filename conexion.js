const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const objetobd = mongoose.connection;

objetobd.on('connected', () => {
    console.log("Conexión exitosa a MongoDB")
})
objetobd.on('error', () => {
    console.log("Error en la conexión a MongoDB")
})

module.exports = mongoose;