import mongoose from "mongoose";

const carritoEsquema = new mongoose.Schema(
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

const carritoModelo = mongoose.model('carrito', carritoEsquema)

const obtenerTodosLosProductos = () => {

}
const obtenerUnProducto = () => {

}
const crearUnProducto = async (nuevoProducto) => {
    try {
        const productoACrear = new carritoModelo(nuevoProducto)
        const productoCreado = await productoACrear.save()
        return productoCreado
    } catch (error) {
        throw error
    }
}
const editarUnProducto = () => {

}
const eliminarProducto = () => {

}

export default {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearUnProducto,
    editarUnProducto,
    eliminarProducto
}