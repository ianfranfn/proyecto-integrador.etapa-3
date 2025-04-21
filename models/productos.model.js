import mongoose from "mongoose";

const productosEsquema = mongoose.Schema(
    {
        nombre: {
           type: String,
           required: true
        },
        foto: {
            type: String,
            required: true
         },
        descripcion: {
            type: String,
            required: true
         },
        precio: {
            type: Number,
            required: true
         },
        stock: {
            type: Number,
            required: true
         },
        marca: String,
        categoria: {
            type: String,
            required: true
         },
        detalles:{
            type: String,
            required: true
         },
        envio: Boolean
    },
    {
        timestamps: true,
        versionkey: false
    }
)

const productoModelo = mongoose.model('productos', productosEsquema)


const obtenerTodosLosProductos = async () => {
    console.log('obtenerTodosLosProductos');

    try {
        const productos = await productoModelo.find()
        return productos
    } catch (error) {
        throw error
    }

    
}

const obtenerUnProducto = async (id) => {
    try {
        const producto = await productoModelo.findById(id)
        return producto
    } catch (error) {
        throw error
    }
    
}

const crearUnProducto = async (productoNuevo) => {
    try {
        const productoCreado = new productoModelo(productoNuevo)
        const productoGuardado = await productoCreado.save()
        return productoGuardado
    } catch (error) {
        throw error
    }
}

const editarUnProducto = (productoEditado) => {
    console.log('editarUnProducto');
}

const eliminarProducto = async (id) => {
    try {
        const productoEliminado = await productoModelo.findByIdAndDelete(id)
        return productoEliminado
    } catch (error) {
        throw error
    }
}

export default {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearUnProducto,
    editarUnProducto,
    eliminarProducto
}