const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventoSchema = new Schema({
    idInstitucion: { type: String, required: false},
    idLogro:{type:String,required:false},
    descripcion: { type: String, required: false },
    fechainicio: { type: Date, required: false },
    fechafin: { type: Date, required: false },
    urlfoto: { type: String, required: false },
    premios:{type:String,required:false}
   
});

module.exports = mongoose.model('Evento', eventoSchema);