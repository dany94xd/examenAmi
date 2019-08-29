const express = require('express');
const router = express.Router();

const reporte = require('../controllers/reporte.controller');

router.get('/', reporte.getReportes);
router.post('/', reporte.createReporte);
router.get('/:id', reporte.getReporte);
router.put('/:id', reporte.editReporte);
router.delete('/:id', reporte.deleteReporte);

module.exports = router;