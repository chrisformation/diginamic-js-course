import {APPID} from "./config.js";
import Town from "./component/Town.js";

(function() {
  let currentTown = null;

  /**
   * Get weather from city name.
   * @param {string} city
   */
  async function getWeather(city) {
    try {
      const responseCoords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},,FRA&appid=${APPID}&lang=fr&units=metric`);
      const coords = await responseCoords.json();

      const responseWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=${APPID}&lang=fr&units=metric`);
      const weather = await responseWeather.json();

      const meteo = {
        temp: weather.main.temp,
        description: weather.weather[0].description,
        temp_max: weather.main.temp_max,
        temp_min: weather.main.temp_min,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        wind: {
          deg: weather.wind.deg,
          speed: weather.wind.speed
        }
      }

      if (currentTown) {
        currentTown.remove();
      }

      currentTown = new Town(city, meteo);
    } catch (e) {
      console.log(e.message);
    }
  }

  document.querySelector('input[type="button"]').onclick = function(event) {
    getWeather(event.target.previousElementSibling.value);
  }
})();
