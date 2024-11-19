const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');

router.post('/datos', sensorController.guardarDatos);
router.get('/datos', sensorController.obtenerDatos);

module.exports = router;
