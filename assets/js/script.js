var userForm = document.querySelector('#user-form');
var cityInput = document.querySelector('#city');
var apiKey = "74865a839c18b6de821b16fbe5db19ed";
var forecastDays = 5;

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = cityInput.value.trim();
  
    if (city) {
      getWeather(city);
  
      //repoContainerEl.textContent = '';
      //nameInputEl.value = '';
      alert('Enter to city');
    } else {
      alert('Please enter a city to find weather...');
    }
  };

  var getWeather = function (city) {
    var apiUrl ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=" + forecastDays + "&appid=" + apiKey;
  
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          //displayRepos(data.items, language);
          console.log(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };

  userForm.addEventListener('submit', formSubmitHandler);