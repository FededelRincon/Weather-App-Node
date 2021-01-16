// asi fue como hice la peticion x 1era vez
// http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233

const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=856eb07c434d80ac3cf4bfac9a5da8be&query=37.8267,-122.4233'

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})