var express = require('express');
var router = express.Router();
const alumneController = require('../controllers/alumne-controller');

// Enllaça l'URL amb la funció del controlador [cite: 324, 334]
router.get('/matriculats-iaw', alumneController.llistaAlumnesMatriculats);

module.exports = router; // Aquesta línia és vital per evitar el teu error
