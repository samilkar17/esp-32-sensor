const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    temperatura: Number,
    humedad: Number,
    timestamp: { type: Date, default: Date.now }
}, {
    collection: 'sensor' // Esto evita la pluralización y transformación
});

module.exports = mongoose.model('Sensor', sensorSchema);

