const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('MongoDB Atlas conectado exitosamente');
    } catch (error) {
        console.error('Error de conexión:', error);
        process.exit(1);
    }
};

module.exports = connectDB;


