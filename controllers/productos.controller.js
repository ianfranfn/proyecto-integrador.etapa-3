const getAll = (req, res) => {
    res.send('GET ALL')
}
const getOne = (req, res) => {
    const id = req.params.id
    res.send('GET ONE')
}

const create = (req, res) => {
    const productoACrear = req.body
    res.send('CREATE producto')
}

const update = (req, res) => {
    const id = req.params.id
    const productoAEditar = req.body
    res.send('UPDATE producto')
}

const remove = (req, res) => {
    const id = req.params.id
    res.send('DELETED producto')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}