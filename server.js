const express = require('express');
const app = express();
const archivoDB = require('./conexion');



app.get('/', (req, res) => {
    res.end('Servidor Node')
})

//Server configuration
app.listen(5000, () => {
    console.log("El servidor está corriendo en el puerto 5000");
})