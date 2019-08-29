const express = require('express');
const router = express.Router();

const parametro = require('../controllers/parametros.controller');

router.get('/', parametro.getParametros);
router.post('/', parametro.createParametro);
router.get('/:id', parametro.getParametro);
router.put('/:id', parametro.editParametro);
router.delete('/:id', parametro.deleteParametro);

module.exports = router;