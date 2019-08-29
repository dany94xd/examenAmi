const mongoose = require('mongoose');
const { Schema } = mongoose;

const opcionesMenuSchema = new Schema({
    idOpcionMenu: { type: String, required: false},
    idMenu: { type: String, required: false },
    url: { type: String, required: false },
   
});

module.exports = mongoose.model('OpcionesMenu', opcionesMenuSchema);