import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/upload.controller.js'
import uploadMiddleware from '../middlewares/upload.middleware.js'


routerUpload.post('/', uploadMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload