const mongoose = require('mongoose');
const { Schema } = mongoose;

const parametroSchema = new Schema({
    idParametro: { type: String, required: false},
    nombreParametro: { type: String, required: false },
    valor: { type: String, required: false }
});

module.exports = mongoose.model('Parametro', parametroSchema);