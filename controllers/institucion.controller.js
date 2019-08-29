const Institucion = require('../models/institucion');

const institucionCtrl = {};

institucionCtrl.getInstitucions = async (req, res, next) => {
    const institucions = await Institucion.find();
    res.json(institucions);
};

institucionCtrl.createInstitucion = async (req, res, next) => {
    const institucion = new Institucion({
        idInstitucion: req.body.idInstitucion,
        nombre: req.body.nombre,
        ruc: req.body.ruc,
        descripcion: req.body.descripcion,
        urlfoto: req.body.urlfoto
    });
    await institucion.save();
    res.json({ status: 'Institucion created' });
};

institucionCtrl.getInstitucion = async (req, res, next) => {
    const { id } = req.params;
    const institucion = await Institucion.findById(id);
    res.json(institucion);
};

institucionCtrl.editInstitucion = async (req, res, next) => {
    const { id } = req.params;
    const institucion = {
        idInstitucion: req.body.idInstitucion,
        nombre: req.body.nombre,
        ruc: req.body.ruc,
        descripcion: req.body.descripcion,
        urlfoto: req.body.urlfoto
    };
    await Institucion.findByIdAndUpdate(id, { $set: institucion }, { new: true });
    res.json({ status: 'Institucion Updated' });
};

institucionCtrl.deleteInstitucion = async (req, res, next) => {
    await Institucion.findByIdAndRemove(req.params.id);
    res.json({ status: 'Institucion Deleted' });
};

module.exports = institucionCtrl;
