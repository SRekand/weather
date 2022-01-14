document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch( city ) {
    var key = '8a7651ab756f948007ca9692674c5c5f';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) // Convert data to json
        .then(function(data){
            console.log(data);
            drawWeather(data)
        })
        .catch(function (){
            // catch any errors
        })
}
function cityWeather(e){
    weatherDataFetch('Tallinn');
}