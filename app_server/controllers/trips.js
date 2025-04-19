const Trip = require('../models/trip');

// GET /api/trips - return all trips
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve trips.' });
  }
};

// GET /api/trips/:tripId - return a single trip by ID
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching trip.' });
  }
};

module.exports = { getTrips, getTripById };
