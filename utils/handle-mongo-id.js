
elemento = {
    _id: 'ObjectId',
    nombre: 'Nombre',
}



const handleMongoId = (elemento) => {
    elemento = JSON.parse(JSON.stringify(elemento))

    if ( Array.isArray(elemento) ) {
        console.log('Llego una array de productos');
    } else {
        console.log('Llego un documento');
        elemento.id = elemento['_id']
        delete elemento['_id']
    }

    return elemento
}

export default handleMongoId