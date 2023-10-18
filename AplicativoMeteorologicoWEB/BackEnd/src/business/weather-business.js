const weatherRepository = require('../repository/weather-repository');

const create = async (weather) => {
    return weatherRepository.create(weather);
}

const find = async (weather) => {

    return weatherRepository.find(weather);
}

module.exports = { create, find };