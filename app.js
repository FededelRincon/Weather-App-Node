// asi fue como hice la peticion x 1era vez
// http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233

const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233&units=m'

request({ url:url, json: true }, (error, response) => {
    //console.log(response.body.current)

    const weater_descriptions = response.body.current.weather_descriptions[0]
    const temperature = response.body.current.temperature
    const feelsTemperature = response.body.current.feelslike
    
    console.log(`${weater_descriptions}. It is currently ${temperature} degress out there. It feels like ${feelsTemperature} degress out`)
})