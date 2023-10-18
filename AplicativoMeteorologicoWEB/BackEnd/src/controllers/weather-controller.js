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