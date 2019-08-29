const express = require('express');
const router = express.Router();

const webapp = require('../controllers/webapp.controller');

router.get('/data/:id', webapp.getMatriculaData);
router.get('/userdata/:id', webapp.getUserData);
router.get('/userupdatesaldo/:id', webapp.userUpdateSaldo);

module.exports = router;
