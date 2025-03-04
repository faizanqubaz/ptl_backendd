require('dotenv').config({ path: './.env' });

const express = require('express');
const cors = require('cors');
const connectDB = require('../../config/db'); // Adjust path

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB().catch((err) => {
  console.error("Database connection failed!", err);
});

// Import routes
const bookingRoutes = require('../../routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Export handler for Vercel
module.exports = app;
