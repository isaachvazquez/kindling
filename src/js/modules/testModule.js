// Usage:
//
// WeatherWidget.init();
//

var s,
WeatherWidget = {

  settings: {
    WEATHER_API_KEY: '90e334900cec9ea02f2672725f6025de',
    CITY_ID: 5274644,
    WEATHER_API_URL: `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&units=imperial&APPID=${WEATHER_API_KEY}`,
    weatherWidget: document.querySelector('.WeatherWidget'),
    weatherButton: document.querySelector('.WeatherWidget-button')
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.weatherButton.addEventListener("click", function() {
      NewsWidget.getWeatherData(s.WEATHER_API_URL);
    });
  },

  getWeatherData: function(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Do something with the data
        console.log(data);
      })
      .catch(e => console.log('error', e));
  }

};


module.exports = { WeatherWidget, s };
