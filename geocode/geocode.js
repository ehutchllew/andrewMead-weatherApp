
const axios = require('axios');

const geocodeAddress = address => {
    const url = `http://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?apikey=0c4ad43c1b01423ea9fe2d1db12575d1&version=4.01&zip=${address}&includeHeader=false`
    
    return axios.get(url)
        .then(resp => {
            const formattedData = resp.data.split(',');
            const [lat, lng] = [formattedData[3], formattedData[4]];
            const response = {
                lat,
                lng,
            };
            return response;
        })
        .catch(err => callback(null, err));
}

module.exports.geocodeAddress = geocodeAddress;