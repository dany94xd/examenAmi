const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex',true)
const usuarioSchema = new Schema({
    idUser: { type: String, required: false},
    idPersona: { type: String, required: false },
    idLogros: { type: String, required: false },
    idRol: { type: String, required: false},
    idInstitucion:{type:String ,required:false},
    matricula:{type:String ,required:false},	
    NroBotellas:{type:Number,required:false},
    saldoActual:{type:Number,required:false},
    saldoVerde:{type:Number,required:false},
    Urlfoto:{type:String,required:false},
    user:{type:String,required:false},
    password:{type:String,required:false},
    email:{type:String,required:true,trim:true}

},
{
    timestamps:true   
}

);

//module.exports=usuarioSchema;
module.exports = mongoose.model('Usuario', usuarioSchema);
