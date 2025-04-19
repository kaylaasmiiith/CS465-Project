const express = require('express');
const router = express.Router();
const tripCtrl = require('../controllers/trips');

router.get('/trips', tripCtrl.getTrips);
router.get('/trips/:tripId', tripCtrl.getTripById);

module.exports = router;
