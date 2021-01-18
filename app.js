// asi fue como hice la peticion x 1era vez
// http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233

const request = require('postman-request')


//weather api
const weatherURL = 'http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233&units=m'

request({ url:weatherURL, json: true }, (error, response) => {
    //console.log(response.body.current)

    const weater_descriptions = response.body.current.weather_descriptions[0]
    const temperature = response.body.current.temperature
    const feelsTemperature = response.body.current.feelslike
    
    console.log(`${weater_descriptions}. It is currently ${temperature} degress out there. It feels like ${feelsTemperature} degress out`)
})


//Geo api
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFxdWV0aW5obyIsImEiOiJja2sycDc4YzAxM2kyMm9tZm8ybWg3emdrIn0.6XhGimBpY4H5p_zjExagpg&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]

    console.log(latitude, longitude)
})