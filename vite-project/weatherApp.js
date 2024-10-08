import * as weatherUI from "./weatherUI.js";
import * as weatherAPI from "./weatherAPI.js";

weatherUI.currentWeatherScrollOpacity();
window.onload = function () {
  simulateSearch();
};

document.querySelector("#search-box").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    try {
      // Remember to use .then() here to wait for data to come back first
      search(event).then((data) => {
        const weatherData = data;
        displayData(weatherData);
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
});

function displayData(data) {
  weatherUI.currentWeather(data);
  weatherUI.hourlyForecast(data);
  weatherUI.tenDaysForecast(data);
  weatherUI.uvIndex(data);
  weatherUI.twilight(data);
  weatherUI.windSpeed(data);
  weatherUI.precipitation(data);
  weatherUI.feelsLike(data);
  weatherUI.moonPhase(data);
  weatherUI.visibility(data);
  weatherUI.humidity(data);
  weatherUI.pressure(data);
  weatherUI.averages(data);
  weatherUI.setBackgroundGradient(data);
}

async function search(event) {
  const city = event.target.value;
  if (city) {
    const data = await weatherAPI.fetchWeatherData(city);
    if (data) {
      console.log("Search result:", data);
      return data;
    }
  }
}

function simulateSearch() {
  const searchInput = document.querySelector("#search-box");
  searchInput.value = "Lund";
  const event = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    bubbles: true,
  });
  searchInput.dispatchEvent(event);
}
