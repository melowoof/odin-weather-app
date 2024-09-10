import * as weatherUI from "./weatherUI.js";
import * as weatherAPI from "./weatherAPI.js";
// import { currentWeatherScrollOpacity } from "./weatherUI";

weatherUI.currentWeatherScrollOpacity();
window.onload = function () {
  simulateSearch();
};

document.querySelector("#search-box").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    try {
      // Remember to use .then() here to wait for data to come back first!!
      search(event).then((data) => {
        const weatherData = data;
        // console.log(weatherData);
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
