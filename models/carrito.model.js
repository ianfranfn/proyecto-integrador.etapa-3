import mongoose from "mongoose"


const carritoSchema = mongoose.Schema({
    carrito: Array  
})

const carritoModel = mongoose.model('carrito', carritoSchema)

const crearCarrito = async (carrito) => {
    try {
        const carritoCreado = new carritoModel({carrito})
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado
    } catch (error) {
        throw error
        
    }
}