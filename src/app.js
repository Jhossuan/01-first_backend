const express = require('express');
const cors = require('cors');
const app = express();

//configuración
app.set('port', process.env.PORT || 5001);

//middlewares
app.use(cors());
app.use(express.json())

//Ruta para nuestra api de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app;