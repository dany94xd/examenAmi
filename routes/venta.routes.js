const express = require('express');
const router = express.Router();

const venta = require('../controllers/venta.controller');

router.get('/', venta.getVentas);
router.post('/', venta.createVenta);
router.get('/:id', venta.getVenta);
router.put('/:id', venta.editVenta);
router.delete('/:id', venta.deleteVenta);

module.exports = router;