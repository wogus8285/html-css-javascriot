const weather = document.querySelector('.weather')
const API = '2c4b450cf6ec2c928eeba8d3f370a762'

function getWeather(lat, lon) {
    console.log(lat,lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`

    fetch(url)
    .then(function(response) {
        // console.log(response.json())
        return response.json()
    })
    .then(function(json){
        // console.log(json)
        const city =json.name
        const temp = json.main.temp

        weather.innerText = `${temp}°C  ${city}`
    })
}




function geoSucces(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    getWeather(latitude,longitude)
}

function geoError(){
    console.log('위치정보를 허용하지 않았습니다');
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function init() {
    askCoords()
}


init( )