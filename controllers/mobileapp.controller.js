const Usuario = require('../models/usuario');
const Persona = require('../models/persona');

const mobileAppCtrl = {};

//Usuario
mobileAppCtrl.getUsuarioData = async (req, res, next) => {
    
    const { id } = req.params;

    const usuarioData = await Usuario.find({ 'user': id }).select({ user: 1, idPersona: 1, NroBotellas: 1, saldoVerde: 1, saldoActual: 1 });

    res.json(usuarioData);
};

//Matricula
mobileAppCtrl.getMatriculaData = async (req, res, next) => {
    const { id } = req.params;
    
    const usuarioData = await Usuario.find({ 'matricula': id}).select({ idInstitucion:1, matricula:1, NroBotellas: 1, saldoVerde: 1, saldoActual: 1 });

 const personaData = await Persona.find({ 'matricula': id }).select({ nombre: 1, apellido: 1});
 
    const dataFinal= [await usuarioData, await personaData];
    
    //console.log(dataFinal);
    res.json(dataFinal);
};


//Matricula-Usuario
mobileAppCtrl.getMatricula = async (req, res, next) => {
    const { id } = req.params;
    
    const usuarioData = await Usuario.find({ 'matricula': id});

    res.json(usuarioData);
};


//Saldo
mobileAppCtrl.prueba = async (req, res, next) => {
    const { id } = req.params; //recibe matricula
    console.log("matricula: " + id);
    const idUser = await Usuario.find({ 'matricula': id }).select({ _id: 1 }); //busca el id del row basado en la matricula
    const allUser = await Usuario.find({ 'matricula': id }) //busca todos los campos del row basado en matricula
    //Proceso de conversion
    var stringallUser = JSON.stringify(allUser); //JSON a string
    var stringallUserRepair = stringallUser.substring(1, stringallUser .length-1); //Quitando corchetes de la cadena
   //es necesario quitar los corchetes para que la funcion permita crear un objeto basado en el json
    jsonallUser = JSON.parse(stringallUserRepair); //objeto basado en el json, ya se puede usar los campos


    if(parseFloat(jsonallUser.saldoActual) > 0.30){
        jsonallUser.saldoActual = parseFloat(jsonallUser.saldoActual) - 0.30
        jsonallUser.saldoActual.toString();
        console.log("Saldo actual: "+ jsonallUser.saldoActual);
        //res.json({status: '1'});
    }else{
        console.log("Falta saldo");
         //res.json({status: '0'});
    }


    //agregando corchetes para guardar
    stringtmp = JSON.stringify(jsonallUser);
    tmp = "[" + stringtmp + "]";
    jsonallUserSave = JSON.parse(tmp);

   //string del ID
   var stringid = JSON.stringify(idUser); //tostring
   const stringidnuevo = stringid.substring(9, stringid .length-3); //eliminar la estructura del json para guardar
   console.log("ID Object: " + stringidnuevo);
    console.log(jsonallUserSave);

   // No funciona el update para la base, la logica del resto si..
  // await Usuario.findOneAndUpdate({_id: stringidnuevo}, {$set: jsonallUserSave}, {new: true, useFindAndModify: false});
   //await Usuario.find

    //await Usuario.findOneAndUpdate(stringidnuevo, {$set: allUser},{useFindAndModify: false});
    //res.json({status: "prueba"});
    //await Usuario.fin d
    res.json(jsonallUserSave);
};


module.exports = mobileAppCtrl;
