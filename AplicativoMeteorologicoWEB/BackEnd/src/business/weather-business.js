const weatherRepository = require('../repository/weather-repository');

const create = async (weather) => {
    return weatherRepository.create(weather);
}

const find = async (weather) => {

    return weatherRepository.find(weather);
}

module.exports = { create, find };

const axios = require('axios');
const weatherRepository = require('../repository/weather-repository');

weatherRepository = new WeatherRepository();

const create = async (city) => {
    try {
        const apiKey = 'YOUR_API_KEY'; // Substitua pelo seu próprio API Key
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
        if (response.data) {
          const weatherData = response.data;
          
          await this.weatherRepository.create(city, weatherData);
  
          return weatherData;
        } else {
          throw new Error('Não foi possível obter os dados climáticos.');
        }
      } catch (error) {
        throw error;
      }
}

const find = async (city) => {
    const data = await this.weatherRepository.find(city);
    return data;
}

module.exports = { create, find };
