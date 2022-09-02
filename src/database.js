const mongoose = require('mongoose')

//Cadena de conexión
try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('Base de datos conectada correctamente.')
} catch (error) {
    console.log('Error' + error)
}