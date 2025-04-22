import express from 'express'
const routerCarrito = express.Router()

// ! CRUD Carrito

routerCarrito.get('/', carritoController.getAll)

routerCarrito.get('/:id', carritoController.getOne)

routerCarrito.post('/', carritoController.create)

routerCarrito.put('/:id', carritoController.update)

routerCarrito.delete('/:id', carritoController.remove)

export default routerCarrito