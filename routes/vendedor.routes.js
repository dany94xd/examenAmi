const express = require('express');
const router = express.Router();

const vendedor = require('../controllers/vendedor.controller');

router.get('/', vendedor.getVendedores);
router.post('/', vendedor.createVendedor);
router.get('/:id', vendedor.getVendedor);
router.put('/:id', vendedor.editVendedor);
router.delete('/:id', vendedor.deleteVendedor);
router.post('/login/',vendedor.loginVendedor);

module.exports = router;