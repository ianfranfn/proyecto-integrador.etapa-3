import multer from 'multer'
import storage from '../utils/handle-storage.js'

const uploadMiddleware = multer({ storage })

export default uploadMiddleware