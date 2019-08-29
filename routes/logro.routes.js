const express = require('express');
const router = express.Router();

const logro = require('../controllers/logro.controller');

router.get('/', logro.getlogros);
router.post('/', logro.createLogro);
router.get('/:id', logro.getLogro);
router.put('/:id', logro.editLogro);
router.delete('/:id', logro.deleteLogro);

module.exports = router;