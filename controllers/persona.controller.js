const Persona = require('../models/persona');

const personaCtrl = {};

personaCtrl.getPersonas = async (req, res, next) => {
    const personas = await Persona.find();
    res.json(personas);
};

personaCtrl.createPersona = async (req, res, next) => {
    const persona = new Persona({
        idPersona: req.body.idPersona,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });
    await persona.save();
    res.json({status: 'Persona created'});
};

personaCtrl.getPersona = async (req, res, next) => {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    res.json(persona);
};

personaCtrl.editPersona = async (req, res, next) => {
    const { id } = req.params;
    const persona = {
        idPersona: req.body.idPersona,

        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});
    res.json({status: 'Persona Updated'});
};

personaCtrl.deletePersona = async (req, res, next) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({status: 'Persona Deleted'});
};

module.exports = personaCtrl;
