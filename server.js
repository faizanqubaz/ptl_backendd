require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Connect to Database and Start Server (for local development)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  const startServer = async () => {
    try {
      await connectDB();
      console.log("Database connected successfully");

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Database connection failed:", error);
      process.exit(1);
    }
  };

  startServer();
}

// Export the app for Vercel
module.exports = app;