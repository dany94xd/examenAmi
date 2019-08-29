const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex',true)
const vendedorSchema = new Schema({
    idUser: { type: String, required: false},
    idPersona: { type: String, required: false },
    idLogros:{type: String, required: false },
    //idRol: { type: String, required: false},
    cedula:{type:String,required:false},
  	NroVentas:{type:Number,required:false},
    salario:{type:Number,required:false},
    user:{type:String,required:false},
    password:{type:String,required:false},
    email:{type:String,required:true,trim:true}

},
{
    timestamps:true   
}

);

//module.exports=usuarioSchema;
module.exports = mongoose.model('Vendedor', vendedorSchema);
