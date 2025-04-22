import models from '../models/carrito.model.js';

const getAll = (req, res) => {
    console.log('getAll');
    res.send('getAll')
}
const getOne = (req, res) => {
    console.log('getOne');
    res.send('getOne')
}
const create = async (req, res) => {
    const nuevoProducto = req.body 
    try {
        const productoCreado = await models.crearUnProducto(nuevoProducto)
        res.json(productoCreado)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: 'No se pudo crear el producto' })
    }

}
const update = (req, res) => {
    console.log('update');
    res.send('update')
}
const remove = (req, res) => {
    console.log('remove');
    res.send('remove')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}