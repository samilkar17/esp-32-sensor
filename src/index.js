require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const sensorRoutes = require("./routes/sensor.routes");

const app = express();
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
app.use("/api", sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
