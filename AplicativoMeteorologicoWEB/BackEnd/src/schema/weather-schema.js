const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
   city: String,
   temperature: Number,
   conditions: String,
   humidity: Number,
   pressure: Number,
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;

