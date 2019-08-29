const express = require('express');
const router = express.Router();

const institucion = require('../controllers/institucion.controller');

router.get('/', institucion.getInstitucions);
router.post('/', institucion.createInstitucion);
router.get('/:id', institucion.getInstitucion);
router.put('/:id', institucion.editInstitucion);
router.delete('/:id', institucion.deleteInstitucion);

module.exports = router;

