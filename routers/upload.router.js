import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/upload.controller.js'

routerUpload.post('/', controller.uploadImagen)

export default routerUpload