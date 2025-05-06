import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadMiddleware from '../middlewares/uploads.middleware.js'


routerUpload.post('/', uploadMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload