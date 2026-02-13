var express = require('express');
var router = express.Router();
const alumneController = require('../controllers/alumne-controller');

// Defineix la ruta URL
router.get('/matriculats-iaw', alumneController.llistaAlumnesMatriculats);

module.exports = router;
