const Rol = require('../models/rol');

const rolCtrl = {};

rolCtrl.getRols = async (req, res, next) => {
    const rols = await Rol.find();
    res.json(rols);
};

rolCtrl.createRol = async (req, res, next) => {
    const rol = new Rol({
        idRol: req.body.idRol,
        tipoRol: req.body.tipoRol,	
	    descripcion: req.body.descripcion        
    });
    await rol.save();
    res.json({status: 'Rol created'});
};

rolCtrl.getRol = async (req, res, next) => {
    const { id } = req.params;
    const rol = await Rol.findById(id);
    res.json(rol);
};

rolCtrl.editRol = async (req, res, next) => {
    const { id } = req.params;
    const rol = {
       	idRol: req.body.idRol,
        tipoRol: req.body.tipoRol,	
	    descripcion: req.body.descripcion         
    };
    await Rol.findByIdAndUpdate(id, {$set: rol}, {new: true});
    res.json({status: 'Rol Updated'});
};

rolCtrl.deleteRol = async (req, res, next) => {
    await Rol.findByIdAndRemove(req.params.id);
    res.json({status: 'Rol Deleted'});
};

module.exports = rolCtrl;
