const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travlrGetaways', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Route to serve static trips page using trips.json
app.get('/trips', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'trips.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading trips.json:', err);
      res.status(500).send('Error loading trips data');
      return;
    }
    const trips = JSON.parse(data);
    res.render('index', { trips });
  });
});

// NEW: API routes (RESTful) - refactored to app_api
const apiRoutes = require('./app_api/routes/trips');
app.use('/api', apiRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
