const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const logroSchema = new Schema({
    idlogro: {
        type: String,
        required: false
    },
    meta: {
        type: Boolean,
        required: false
    },
    bonificacion: {
        type: Number,
        required: false
    },
    nombre: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: false
    },
    minVentas: {
        type: Number,
        required: false
    },
    maxVentas: {
        type: Number,
        required: false
    },


});

module.exports = mongoose.model('Logro', logroSchema);