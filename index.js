const app = require('./server');

// Export as a serverless function
module.exports = (req, res) => app(req, res);
