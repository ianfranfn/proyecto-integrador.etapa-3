import mongoose from "mongoose"

const connection = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('conexion a MongoDB ok')   
    } catch (error) {
        console.log('Error de conexion a MongoDB', error);
    }
}

export default connection