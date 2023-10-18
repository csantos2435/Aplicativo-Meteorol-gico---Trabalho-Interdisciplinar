const weatherBusiness = require('../business/weather-business');

const getweather = async (req, res) => {
    try{
        const result = await weatherBusiness.find();
        return res.send(result).code(200);    
    }catch (err){
        console.error(error)
        res.status(500).send(error)
    }
};

const postweather = async (req, res) => {
    try{
        const result = await weatherBusiness.create(req.payload);
        return res.response(result).code(201);
    }catch(err){
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = {getweather, postweather};

const express = require('express');
const WeatherBusiness = require('../business/weather-business');

const router = express.Router();
const weatherBusiness = new WeatherBusiness();

const getweather = async (req, res) => {
    const city = req.params.city;
  try {
    const weatherData = await weatherBusiness.find(city);
    if (weatherData) {
      res.json(weatherData);
    } else {
      res.status(404).json({ error: 'Dados climáticos não encontrados.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados climáticos.' });
  }
};

const postweather = async (req, res) => {
    const city = req.params.city;
    try {
      const weatherData = await weatherBusiness.create(city);
      if (weatherData) {
        res.json(weatherData);
      } else {
        res.status(404).json({ error: 'Dados climáticos não encontrados.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar dados climáticos.' });
    }
};

module.exports = {getweather, postweather};
