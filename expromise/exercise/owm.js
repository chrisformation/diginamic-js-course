import {APPID} from "./config.js";
import Town from "./component/Town.js";

(function() {
  let currentTown = null;

  /**
   * Get weather from coordinates.
   * @param {string} city
   */
  function getWeather(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},,FRA&appid=${APPID}&lang=fr&units=metric`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0]["lat"]}&lon=${data[0]["lon"]}&appid=${APPID}&lang=fr&units=metric`)
        })
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          const meteo = {
            temp: data.main.temp,
            description: data.weather[0].description,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: {
              deg: data.wind.deg,
              speed: data.wind.speed
            }
          }

          if (currentTown) {
            currentTown.remove();
          }

            currentTown = new Town(city, meteo);
        })
        .catch(error => {
          console.log(error.message);
        })
    ;
  }

  document.querySelector('input[type="button"]').onclick = function(event) {
    getWeather(event.target.previousElementSibling.value);
  }
})();
