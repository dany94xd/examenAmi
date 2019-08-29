const Evento = require('../models/evento');

const eventoCtrl = {};

eventoCtrl.getEventos = async (req, res, next) => {
    const eventos = await Evento.find();
    res.json(eventos);
};

eventoCtrl.createEvento = async (req, res, next) => {
    const evento = new Evento({
        idInstitucion: req.body.idInstitucion,
        idLogro: req.body.idLogro,
        descripcion: req.body.descripcion,
        fechainicio: req.body.fechainicio,
        fechafin: req.body.fechafin,
        urlfoto: req.body.urlfoto,
        premios: req.body.premios,
    });
    await evento.save();
    res.json({status: 'Evento created'});
};

eventoCtrl.getEvento = async (req, res, next) => {
    const { id } = req.params;
    const evento = await Evento.findById(id);
    res.json(evento);
};

eventoCtrl.editEvento = async (req, res, next) => {
    const { id } = req.params;
    const evento = {
        idInstitucion: req.body.idInstitucion,
        idLogro: req.body.idLogro,
        descripcion: req.body.descripcion,
        fechainicio: req.body.fechainicio,
        fechafin: req.body.fechafin,
        urlfoto: req.body.urlfoto,
        premios: req.body.premios,
    };
    await Evento.findByIdAndUpdate(id, {$set: evento}, {new: true});
    res.json({status: 'Evento Updated'});
};

eventoCtrl.deleteEvento = async (req, res, next) => {
    await Evento.findByIdAndRemove(req.params.id);
    res.json({status: 'Evento Deleted'});
};

module.exports = eventoCtrl;