const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    console.log(argv);

const encodedAddress = encodeURIComponent(argv.a);

const callbacks = (resp, err) => {
    console.log(`---------------\nCallback\n---------------`)
    if(resp)
        return resp;
    else
        console.log(error);
}

// geocode.geocodeAddress(encodedAddress, geoCodeCallback)

async function getWeather(address){
    const geoCode = await geocode.geocodeAddress(address, callbacks);
    const weather = await forecast.getForecast(geoCode, callbacks);
    console.log(`Weather for: ${address}\nCurrent: ${weather.temperature}\nFeels Like: ${weather.apparentTemperature}\nSummary: ${weather.summary}`);
}

getWeather(encodedAddress);