(function () {
  // https://api.openweathermap.org/data/2.5/weather?lat=43.60880969487954&lon=3.879734494618951&appid=xxx&lang=fr&units=metric
  // http://api.openweathermap.org/geo/1.0/direct?q=Montpellier,34000,FRA&appid=xxx
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=lattes,34,FRA&appid=xxx`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      })
  ;
})();
