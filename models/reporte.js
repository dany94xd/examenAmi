const mongoose = require('mongoose');
const { Schema } = mongoose;

const reporteSchema = new Schema({
    idReporte: { type: String, required: false},
    idInstitucion: { type: String, required: false },
    fecha: { type: Date, required: false },
    NroBotellas:{type:Number,required:false}

});

module.exports = mongoose.model('Reporte', reporteSchema);