const controller = require('../controllers/weather-controller');
const schema = require('../schema/weather-schema');
const routes = [
    {
        method: "GET",
        path: "/weathers",
        handler: controller.getweather 
    },
    {
        method: "POST",
        path: "/weathers",
        options: {
            handler: controller.postweather,
            validate: schema.weatherSchema 
        }
    }
];

module.exports = routes;
