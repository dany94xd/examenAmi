const express = require('express');
const router = express.Router();

const evento = require('../controllers/evento.controller');

router.get('/', evento.getEventos);
router.post('/', evento.createEvento);
router.get('/:id', evento.getEvento);
router.put('/:id', evento.editEvento);
router.delete('/:id', evento.deleteEvento);

module.exports = router;
