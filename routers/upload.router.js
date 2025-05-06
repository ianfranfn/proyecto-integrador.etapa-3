import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadMiddleware from '../middlewares/upload.middleware.js'


routerUpload.post('/', uploadMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload