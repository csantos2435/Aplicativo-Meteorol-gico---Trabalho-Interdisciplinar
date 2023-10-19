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
