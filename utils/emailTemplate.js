const createEmailContent = (booking) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // The issue is right here - return needs to either have the string on the same line
  // or use backticks for template literals
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: alegraya, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #f8f9fa;
          padding: 20px;
          text-align: center;
          border-bottom: 3px solid #dee2e6;
        }
        .content {
          padding: 20px;
        }
        .booking-details {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .total {
          font-size: 18px;
          font-weight: bold;
          text-align: right;
          padding: 10px;
          background-color: #e9ecef;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #6c757d;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Booking Confirmation</h1>
        <p>Thank you for choosing Passu Tourist Lodge!</p>
      </div>
      
      <div class="content">
        <p>Dear ${booking.name},</p>
        
        <p>We are pleased to confirm your booking at our hotel. Below are your booking details:</p>
        
        <div class="booking-details">
          <h3>Booking Information</h3>
          <p><strong>Booking Reference:</strong> ${Math.random().toString(36).substring(7).toUpperCase()}</p>
          <p><strong>Room Category:</strong> ${booking.category}</p>
          <p><strong>Check-in Date:</strong> ${formatDate(booking.checkin)}</p>
          <p><strong>Check-out Date:</strong> ${formatDate(booking.checkout)}</p>
          <p><strong>Number of Nights:</strong> ${booking.nights}</p>
          <p><strong>Number of Rooms:</strong> ${booking.rooms}</p>
          <p><strong>Guests:</strong> ${booking.adults} Adults, ${booking.children} Children</p>
          <p><strong>Price per Night:</strong> PKR ${booking.price.toLocaleString()}</p>
        </div>

        <div class="total">
          Total Amount: PKR ${booking.subtotal.toLocaleString()}
        </div>

        <h3>Important Information</h3>
        <ul>
          <li>Check-in time: 2:00 PM</li>
          <li>Check-out time: 12:00 PM</li>
          <li>We accept cash on deveivery upon check-in</li>
        </ul>
        
        <p>If you need to modify or cancel your reservation, please contact us at least 24 hours before your check-in date.</p>
        <p>Please <strong>Note</strong>This is not the final confirmation.Our team will reach you out through the number you have provided in order to Reserve your Room.</p>
        <p>For any questions or special requests, please don't hesitate to contact us:</p>
        <ul>
          <li>Phone: +92 3554477788</li>
          <li>Email: ptlpassu@gmail.com</li>
        </ul>
      </div>
      <div class="footer">
        <p>This is an automated email. Please do not reply to this message.</p>
        <p>© ${new Date().getFullYear()} Passu Tourist Lodge. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};

module.exports = createEmailContent;