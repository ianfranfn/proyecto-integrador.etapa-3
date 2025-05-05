const handleMongoId = (elemento) => {
    const clave = '_id'
    elemento = JSON.parse(JSON.stringify(elemento))

    if ( Array.isArray(elemento) ) {
        console.log('Llego una array de productos');

        for (let index = 0; index < elemento.length; index++) {
            elemento[i].id = elemento[i][clave]
            delete elemento[id][clave]
        }
    } else {
        console.log('Llego un documento');
        elemento.id = elemento[clave]
        delete elemento[clave]
    }

    return elemento
}

export default handleMongoId