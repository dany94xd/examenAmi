const mongoose = require('mongoose');
const { Schema } = mongoose;

const ventaSchema = new Schema({
    idVenta: { type: String, required: false},
    idProducto: { type: String, required: false },
    costodeProducto: { type: String, required: false},
    costoTotalVendido: { type: Number, required: false},
    numerodeproductosvendidos:{type: Number, required: false},
    fechaventa:{type:Date,required:false}
});

module.exports = mongoose.model('Venta', ventaSchema);