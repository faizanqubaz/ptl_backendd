require('dotenv').config({ path: './.env' });

console.log("Starting server...");
console.log("MongoDB URI from env:", process.env.MONGODB_URI); // Debugging log

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Check if MONGODB_URI is correctly loaded
if (!process.env.MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is not defined. Check your .env file.");
  process.exit(1); // Stop the app if MongoDB URI is missing
}

// Connect to Database
connectDB().catch((err) => {
  console.error("Database connection failed!", err);
});

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(${req.method} ${req.url});
  next();
});

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
