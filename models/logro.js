const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const logroSchema = new Schema({
    idLogro: {
        type: String,
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
    minbotella: {
        type: Number,
        required: false
    },
    maxbotella: {
        type: Number,
        required: false
    },
    idInstitucion: {
        types: String,
        required: false
    }

});

module.exports = mongoose.model('Logro', logroSchema);