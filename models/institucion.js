const mongoose = require('mongoose');
const { Schema } = mongoose;

const institucionSchema = new Schema({
    idInstitucion: { type: String, required: false},
    nombre: { type: String, required: false },
    ruc: { type: String, required: false },
    descripcion: { type: String, required: false },
    urlfoto: { type: String, required: false },
   
});

module.exports = mongoose.model('Institucion', institucionSchema);