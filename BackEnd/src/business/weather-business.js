const axios = require('axios');
const weatherRepository = require('../repository/weather-repository');

const create = async (city) => {
    try {
        const apiKey = 'f4f86ffb85c079dec43e87d7a99fb731'; 
        const lat = '-20.5381768';
        const lon = '-47.4009795';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        //http://api.openweathermap.org/geo/1.0/direct?q=franca&appid=f4f86ffb85c079dec43e87d7a99fb731 -> busca dados da cidade
        if (response.data) {
          const weatherData = response.data;
          
          await weatherRepository.create(city, weatherData);
  
          return weatherData;
        } else {
          throw new Error('Não foi possível obter os dados climáticos.');
        }
      } catch (error) {
        throw error;
      }
}

const find = async (city) => {
    const data = await weatherRepository.find(city);
    return data;
}

module.exports = { create, find };
