const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
  description: String
});

module.exports = mongoose.model('Trip', tripSchema);
