const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex',true)
const productoSchema = new Schema({
    idProducto: { type: String, required: false },
    codigobarra: { type: String, required: false },
    //idRol: { type: String, required: false},
    NombreProducto: { type: String, required: false },
    NroVentasTotales: { type: Number, required: false },
    NrVentalogro: { type: Number, required: false },
    tipo: { type: Number, required: false },
    CostodeVenta: { type: Number, required: false },
    Stock:{ type: Number, required: false }



},
    {
        timestamps: true
    }

);

//module.exports=usuarioSchema;
module.exports = mongoose.model('Producto', productoSchema);