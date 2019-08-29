const express = require('express');
const router = express.Router();

const menu = require('../controllers/menu.controller');

router.get('/', menu.getMenus);
router.post('/', menu.createMenu);
router.get('/:id', menu.getMenu);
router.put('/:id', menu.editMenu);
router.delete('/:id', menu.deleteMenu);

module.exports = router;