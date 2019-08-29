const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
    idPersona: { type: String, required: false},
    cedula: { type: String, required: false },
    nombre: { type: String, required: false},
    apellido:{type:String ,required:false}
});

module.exports = mongoose.model('Persona', personaSchema);
