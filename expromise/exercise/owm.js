(function() {
  function getCoords(city) {
    //"http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}")
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},,FRA&appid=7d2e46eb2210eba3440dedf6c61afb39&lang=fr&units=metric`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          getWeather(data[0].lat, data[0].lon, data[0].name);
        })
        .catch(error => {
          console.log(error.message);
        })
    ;
  }

  function getWeather(lat, lon, name) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d2e46eb2210eba3440dedf6c61afb39&lang=fr&units=metric`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(data => {
      console.log(data);
      console.log(data["wind"]["speed"]);
      document.getElementById("city-name").innerHTML = name;
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
    getCoords(event.target.previousElementSibling.value);
  }
})();
