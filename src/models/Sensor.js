const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    temperatura: Number,
    humedad: Number,
    timestamp: { 
        type: Date, 
        default: () => new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' })
    }
}, {
    collection: 'sensor'
});

module.exports = mongoose.model('Sensor', sensorSchema);


