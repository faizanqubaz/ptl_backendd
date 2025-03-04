const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  category: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  rooms: { type: Number, required: true },
  nights: { type: Number, required: true },
  price: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Booking', bookingSchema);