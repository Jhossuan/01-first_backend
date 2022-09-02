require('dotenv/config')

const app = require('./app')
require('./database')

//Logica para ejecutar el servidor
async function main(){
    await app.listen(app.get('port'))
    console.log('Servidor ejecutado en http://localhost:' + app.get('port'))
}

main();