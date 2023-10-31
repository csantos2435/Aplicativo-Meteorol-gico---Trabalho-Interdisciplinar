const axios = require('axios');
const Weather = require('../schema/weather-schema')

const create = async (lon, lat) => {
    try{
        const apiKey = 'f4f86ffb85c079dec43e87d7a99fb731';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        if (response.data){
            const weatherData = response.data;

            const saveWeather = new Weather({
                city: weatherData.name,
                longitude: weatherData.coord.lon,
                latidute: weatherData.coord.lat,
                clima: weatherData.weather.description,
                temperatura: weatherData.main.temp,
                temperaturaMax: weatherData.main.temp_max,
                temperaturaMin:  weatherData.main.temp_min,
                pressao: weatherData.main.pressure,
                humidade: weatherData.main.humidity,
                visibilidade: weatherData.visibility
            });
            await saveWeather.save();
            
            return weatherData;
        }else{
            throw new Error('Não foi possivel obter dados climaticos');
        }
    }catch(err){
        throw err;
    }
}

const find = async (city) => {
    const data = await Weather.findOne({ city }).exec();
    return data;
}

module.exports = {create, find};
