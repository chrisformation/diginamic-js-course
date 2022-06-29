import {APPID} from "./config.js";

(function() {
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
          console.log(data);
          console.log(data["wind"]["speed"]);
          document.getElementById("city-name").innerHTML = city;
          document.getElementById("temp").innerHTML = data["main"]["temp"];
          document.getElementById("temp-max").innerHTML = data["main"]["temp_max"];
          document.getElementById("temp-min").innerHTML = data["main"]["temp_min"];
          document.getElementById("humidity").innerHTML = data["main"]["humidity"];
          document.getElementById("pressure").innerHTML = data["main"]["pressure"];
          document.getElementById("wind-deg").innerHTML = data["wind"]["deg"];
          document.getElementById("wind-kt").innerHTML = data["wind"]["speed"];

          document.querySelector("article").style.display = "block";
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
