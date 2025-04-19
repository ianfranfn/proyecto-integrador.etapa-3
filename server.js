import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'

// ! constantes
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL


// ! Configuraciones

// ! middlewares
app.use(express.json())

// ! Rutas
app.use('/api/v1/productos', routerProductos)

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error ('No se pudo levantar el servidor')
        console.log(`servidor funcionando en el puerto ${PORT}`);
        connection(URI_DB)
})