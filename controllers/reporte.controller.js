const Reporte = require('../models/reporte');

const reporteCtrl = {};

reporteCtrl.getReportes = async (req, res, next) => {
    const reportes = await Reporte.find();
    res.json(reportes);
};

reporteCtrl.createReporte = async (req, res, next) => {
    const reporte = new Reporte({
        idReporte: req.body.idReporte,
        idInstitucion: req.body.idInstitucion,
	    fecha: req.body.fecha,
	    NroBotellas: req.body.NroBotellas
    });
    await reporte.save();
    res.json({status: 'Reporte created'});
};

reporteCtrl.getReporte = async (req, res, next) => {
    const { id } = req.params;
    const reporte = await Reporte.findById(id);
    res.json(reporte);
};

reporteCtrl.editReporte = async (req, res, next) => {
    const { id } = req.params;
    const reporte = {
        idReporte: req.body.idReporte,
        idInstitucion: req.body.idInstitucion,
	    fecha: req.body.fecha,
	    NroBotellas: req.body.NroBotellas
    };
    await Reporte.findByIdAndUpdate(id, {$set: reporte}, {new: true});
    res.json({status: 'Reporte Updated'});
};

reporteCtrl.deleteReporte = async (req, res, next) => {
    await Reporte.findByIdAndRemove(req.params.id);
    res.json({status: 'Reporte Deleted'});
};

module.exports = reporteCtrl;
