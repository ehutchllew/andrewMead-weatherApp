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

async function getWeather(address){
    const geoCode = await geocode.geocodeAddress(address);
    const weather = await forecast.getForecast(geoCode);
    console.log(`Weather for: ${address}\nCurrent: ${weather.temperature}\nFeels Like: ${weather.apparentTemperature}\nSummary: ${weather.summary}`);
}

getWeather(encodedAddress);