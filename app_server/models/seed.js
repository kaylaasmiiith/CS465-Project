const mongoose = require('mongoose');
const Trip = require('./travlr');
const tripsData = require('./trips.json'); // Add your trips data here

mongoose.connect('mongodb://127.0.0.1/travlr', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    Trip.deleteMany({}).then(() => {
      Trip.insertMany(tripsData).then(() => {
        console.log('Trips data seeded successfully!');
        mongoose.connection.close();
      }).catch(err => console.log('Error inserting trips data: ', err));
    });
  })
  .catch(err => console.log('Error connecting to MongoDB: ', err));
