const Sensor = require('../models/Sensor');

exports.guardarDatos = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body);
        const nuevoRegistro = new Sensor(req.body);
        await nuevoRegistro.save();
        res.status(201).json({ mensaje: 'Datos guardados', datos: nuevoRegistro });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: error.message });
    }
};


exports.obtenerDatos = async (req, res) => {
    try {
        const datos = await Sensor.find().sort({ timestamp: -1 });
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
