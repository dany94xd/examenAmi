const Vendedor = require('../models/vendedor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const SECRET_KEY ='secretkey94'

//mongoose.set('useCreateIndex',true);

const vendedorCtrl = {};

vendedorCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

vendedorCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        idRol: req.body.idRol,
        idInstitucion: req.body.idInstitucion,
	matricula: req.body.matricula,
        NroBotellas: req.body.NroBotellas,
        saldoActual: req.body.saldoActual,
        saldoVerde: req.body.saldoVerde,
        UrlFoto: req.body.UrlFoto,
        user: req.body.user,
      password: req.body.password,
        //password: bcrypt.hashSync(req.body.password),
        email: req.body.email
    });
    await usuario.save();
    res.json({status: 'Usuario created'});
};

vendedorCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

vendedorCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {

        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        idRol: req.body.idRol,
        idInstitucion: req.body.idInstitucion,
	matricula: req.body.matricula,
        NroBotellas: req.body.NroBotellas,
        saldoActual: req.body.saldoActual,
        saldoVerde: req.body.saldoVerde,
        UrlFoto: req.body.UrlFoto,
        user: req.body.user,
       // password: req.body.password
        password:bcrypt.hashSync(req.body.password),
        email:req.body.email
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario Updated'});
};

// jc--------------------------------------------
// usuarioCtrl.editUsuario = async (req, res, next) => {
//     const { id } = req.params;
//     const usuario = {
//         NroBotellas: req.body.NroBotellas
//    };
//     await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
//     res.json({status: 'Usuario Nro Botellas Updated'});
// };




// usuarioCtrl.editUsuario = async (req, res, next) => {
//     const { id } = req.params;
//     const usuario = {
//         saldoActual: req.body.saldoActual
//     };
//     await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
//     res.json({status: 'Usuario Saldo Actual Updated'});
// };


// usuarioCtrl.editUsuario = async (req, res, next) => {
//     const { id } = req.params;
//     const usuario = {
//         saldoVerde: req.body.saldoVerde
//     };
//     await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
//     res.json({status: 'Usuario Saldo Verde Updated'});
// };


// jc--------------------------------------------



vendedorCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Deleted'});
};


//Register
vendedorCtrl.registerUser=async(req,res,next)=>{
    const newUser = new Usuario({
        user:req.body.user,
        password:bcrypt.hashSync(req.body.password)
    })
    Usuario.create=(newUser,(err,user)=>{
       if(err)return res.status(500).send('server error');
       const expiresIn = 24*60*60;
       const accesToken = jwt.sign({id:user.id},
           SECRET_KEY,{
               expiresIn:expiresIn
           });
           const dataUser={
               user:user.user,
               accesToken:accesToken,
               expiresIn:expiresIn
           }
   
        //response
        //res.send({user});
        res.send({dataUser});
   
    })
   
   }


///login 


vendedorCtrl.loginUser=(req,res,next)=>{
    const userData={
        user:req.body.user,
        password:req.body.password
    }

    Usuario.findOne({user:userData.user},(err,user)=>{
        if(err)return res.status(500).send('error en servidor');
        if (!user){
            //email does not exist
            res.status(409).send({message:'somthing is worng'});
    
        }else {
            const resultPassword = bcrypt.compareSync(userData.password,user.password);
            if(resultPassword){
                const expiresIn=24*60*60;
                const accesToken = jwt.sign({id:user.id},SECRET_KEY,{
                    expiresIn:expiresIn
                }); 
    
                const dataUser={
                    user:user.user,
                    idRol:user.idRol,
                    idPersona:user.idPersona,
                    idLogros:user.idLogros,
                    idInstitucion:user.idInstitucion,
                    matricula:user.matricula,
                    NroBotellas:user.NroBotellas,
                    saldoActual:user.saldoActual,
                    saldoVerde:user.saldoVerde,
                    Urlfoto:user.UrlFoto,
                    email:user.email,
                    accesToken:accesToken,
                    expiresIn:expiresIn
                }
                res.send({dataUser})
            } else{
                //paswword wrong
                res.status(409).send({message:"error de password"});
            }
        }
    })
}
module.exports = vendedorCtrl;
