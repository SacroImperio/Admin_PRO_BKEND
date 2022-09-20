
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require ('./database/config')
//Crear el servidor express
const app = express();
//base de datp



//Cors
app.use(cors());

dbConnection();

//Rutas
app.get( '/', (request, response) => {
    response.status(400)
    .json({
        ok: true,
        msg: 'Hello word'
    })
} );

app.listen(process.env.PORT, ()=> {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});