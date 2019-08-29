const Parametro = require('../models/parametro');

const parametroCtrl = {};

parametroCtrl.getParametros = async (req, res, next) => {
    const parametros= await Parametro.find();
    res.json(parametros);
};

parametroCtrl.createParametro = async (req, res, next) => {
    const parametro = new Parametro({
        idParametro:req.body.idParametro,
        nombreParametro: req.body.nombreParametro,
        valor: req.body.valor
       
    });
    await parametro.save();
    res.json({status: 'Parametro created'});
};

parametroCtrl.getParametro = async (req, res, next) => {
    const { id } = req.params;
    const parametro = await Parametro.findById(id);
    res.json(parametro);
};

parametroCtrl.editParametro = async (req, res, next) => {
    const { id } = req.params;
    const parametro = {
        idParametro:req.body.idParametro,
        nombreParametro: req.body.nombreParametro,
        valor: req.body.valor
      
    };
    await Parametro.findByIdAndUpdate(id, {$set: parametro}, {new: true});
    res.json({status: 'Parametro Updated'});
};

parametroCtrl.deleteParametro = async (req, res, next) => {
    await Parametro.findByIdAndRemove(req.params.id);
    res.json({status: 'Parametro Deleted'});
};

module.exports = parametroCtrl;