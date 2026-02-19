const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
const quizRoutes = require('./routes/quizRoutes');

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Kick It Ca to Hubspot Integration API' });
});

// Quiz API routes
app.use('/api', quizRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Kick It Ca to Hubspot Integration initialized');
});
