const axios = require('axios');
const fs = require('fs');
const https = require('https');

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const getForecast = geoCode => {
    const { lat, lng } = geoCode;
    const url = `https://api.forecast.io/forecast/01a311714b4f26391e170bec6be4070a/${lat},${lng}`
    
    return instance.get(url)
        .then(resp => {
            const { summary, temperature, apparentTemperature } = resp.data.currently;
            const response = {
                summary,
                temperature,
                apparentTemperature,
            }
            return response;
        })
        .catch(err => callback(null, err));
}

module.exports.getForecast = getForecast;