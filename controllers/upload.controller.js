const uploadImagen = (req, res) => {
    const imagen = req.file
    console.log(imagen);

    if (!imagen) {
        res.status(400).json({
            mensaje: 'No se cargo la imagen necesaria'
        })
    }

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${imagen.filename}`

    res.status(201).json({
        foto: urlCompletaBack
    })
    
}

export default {
    uploadImagen
}