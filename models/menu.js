const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
    idMenu: { type: String, required: false},
    idRol: { type: String, required: false },

});

module.exports = mongoose.model('Menu', menuSchema);