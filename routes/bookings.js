const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../controllers/bookingController');

// Make sure both route handlers are properly defined
router.post('/', createBooking);
// router.get('/', getAllBookings);

module.exports = router;