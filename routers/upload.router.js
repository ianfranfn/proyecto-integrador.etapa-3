import express from 'express'
const routerUpload = express.Router()

routerUpload.post('/', controller.uploadImagen)

export default routerUpload