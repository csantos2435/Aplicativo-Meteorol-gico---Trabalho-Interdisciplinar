const mongoose = require('mongoose');
const Joi = require('joi');

const weatherSchema = new mongoose.Schema({
    payload: Joi.object({
        city: Joi
            .string()
            .min(1)
            .required(),
        temperature: Joi 
                .number()
                .require(),
        conditions: Joi
                .String()
                .require(),
        humidity: Joi
                .Number()
                .require(),
        pressure: Joi
                .Number()
                .require(),
    }).required()
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;



// const weatherSchema = new mongoose.Schema({
//   city: String,
//   temperature: Number,
//   conditions: String,
//   humidity: Number,
//   pressure: Number,
// });
