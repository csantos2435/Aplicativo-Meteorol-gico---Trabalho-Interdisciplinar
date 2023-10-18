const axios = require('axios');
const Weather = require('../schema/weather-schema')

const create = async (city) => {

    try{
        const apiKey = 'chave';
        const response = await axios.get("link");

        if (response.data){
            const weatherData = response.data;

            const saveWeather = new Weather({
                city: weatherData.name,
                temperature: weatherData.main.temp,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure
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

const find = async (filter) => {
    return foodInMemory;
}

module.exports = {create, find};

const axios = require('axios');
const Weather = require('../schema/weather-schema')

const create = async (city) => {

    try{
        const apiKey = 'chave';
        const response = await axios.get("link");

        if (response.data){
            const weatherData = response.data;

            const saveWeather = new Weather({
                city: weatherData.name,
                temperature: weatherData.main.temp,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure
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
