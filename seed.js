const mongoose = require('mongoose');
const Trip = require('./app_api/models/trip');
const tripsData = require('./data/trips.json');

mongoose.connect('mongodb://localhost:27017/travlrGetaways', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB. Seeding data...');
  await Trip.deleteMany({});
  await Trip.insertMany(tripsData);
  console.log('Trips seeded!');
  process.exit();
})
.catch((err) => {
  console.error('Database connection error:', err);
});