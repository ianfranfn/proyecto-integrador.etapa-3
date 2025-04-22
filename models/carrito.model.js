import mongoose from "mongoose";

const carritoEsquema = new mongoose.Schema(
    {
        productos: [
            {
                productoId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'productos',
                    required: true
                },
                cantidad: {
                    type: Number,
                    required: true,
                    min: 1
                }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)