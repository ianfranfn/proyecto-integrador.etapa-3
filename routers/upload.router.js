import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/upload.controller.js'
import path from 'node:path'
import multer from 'multer'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const rutaDeAlmacenamiento = path.join('public', 'uploads')
        cb(null, rutaDeAlmacenamiento)
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.').pop()
        const nombreArchivo = `${uuidv4()}.${extension}`
        cb(null, nombreArchivo)
        
    }
})

const uploadMiddleware = multer({ storage })



routerUpload.post('/', uploadMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload