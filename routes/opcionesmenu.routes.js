const express = require('express');
const router = express.Router();

const opcionesmenu = require('../controllers/opcionesmenu.controller');

router.get('/', opcionesmenu.getOpcionesmenu);
router.post('/', opcionesmenu.createOpcionesmenu);
router.get('/:id', opcionesmenu.getOpcionesmenu);
router.put('/:id', opcionesmenu.editOpcionesmenu);
router.delete('/:id', opcionesmenu.deleteOpcionesmenu);

module.exports = router;