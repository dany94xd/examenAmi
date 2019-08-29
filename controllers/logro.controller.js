const Logro = require('../models/logro');

const logroCtrl = {};

logroCtrl.getlogros = async (req, res, next) => {
    const logros = await Logro.find();
    res.json(logros);
};

logroCtrl.createLogro = async (req, res, next) => {
    const logro = new Logro({
        idLogro: req.body.idLogro,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        minbotella: req.body.minbotella,
        maxbotella: req.body.maxbotella,
        idInstitucion: req.body.idInstitucion
    });
    await logro.save();
    res.json({ status: 'logro created' });
};

logroCtrl.getLogro = async (req, res, next) => {
    const { id } = req.params;
    const logro = await Logro.findById(id);
    res.json(logro);
};

logroCtrl.editLogro = async (req, res, next) => {
    const { id } = req.params;
    const logro = {
        idLogro: req.body.idLogro,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        minbotella: req.body.minbotella,
        maxbotella: req.body.maxbotella,
        idInstitucion: req.body.idInstitucion
    };
    await Logro.findByIdAndUpdate(id, { $set: logro }, { new: true });
    res.json({ status: 'logro Updated' });
};

logroCtrl.deleteLogro = async (req, res, next) => {
    await Logro.findByIdAndRemove(req.params.id);
    res.json({ status: 'logro Deleted' });
};

module.exports = logroCtrl;