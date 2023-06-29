const express = require('express');
const app = express();
const archivoDB = require('./conexion');

//Importación del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario');

//Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/usuario', rutausuario);



app.get('/', (req, res) => {
    res.end('Servidor Node')
})

//Server configuration
app.listen(5000, () => {
    console.log("El servidor está corriendo en el puerto 5000");
})