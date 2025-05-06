import express from 'express'
import 'dotenv/config'
import path from 'path'
import cors from 'cors'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerCarrito from './routers/carrito.router.js'
import routerUpload from './routers/upload.router.js'

// ! constantes
const app = express()
const PORT = process.env.PORT
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS

// ! configuraciones
const corsConfig = {
    origin: URL_FRONT 
}

// ! middlewares
app.use(express.json())
app.use(express.static(path.join('public')))
app.use(cors(corsConfig)) // Si solo pongo cors() sin agregarle el '(corsConfig)' todas las urls podran acceder a mi api, pero si le paso el corsConfig solo la url que yo le pase podra acceder a mi api. 

// ! Rutas
app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/carrito', routerCarrito)
app.use('/api/v1/uploads', routerUpload)

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error ('No se pudo levantar el servidor')
        console.log(`servidor funcionando en el puerto ${PORT}`);
        connection(URI_DB)
})