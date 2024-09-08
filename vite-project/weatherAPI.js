let currentTempUnit = "C";

export async function fetchWeatherData(city) {
  //   const cacheKey = `weather_${location}`;

  const cachedWeatherData = getCacheData(city);
  if (cachedWeatherData) {
    return cachedWeatherData;
  }

  const apiKey = "0542a923612c4aadaed232622240509";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(apiUrl, { mode: "cors" });
    if (!response.ok) {
      throw new Error(
        `Response status error: ${response.status} ${response.statusText}`
      );
    }
    const weatherData = await response.json();
    cacheData(city, weatherData);

    console.log("Fetched new data:", weatherData);
    return weatherData;
  } catch (error) {
    handleError(error);
  }
}

function displayWeather(data) {}

function convertTemp(temp) {
  // if (temp === C and currentTempUnit === C) {don't do anything} else if (temp === C and currentTempUnit === F) {convert temp to F}
}

function toggleTempUnit() {
  if (currentTempUnit === "C") {
    currentTempUnit = "F";
  } else {
    currentTempUnit = "C";
  }
}

function getCacheData(city) {
  const cachedData = localStorage.getItem(city);
  if (cachedData) {
    const { timestamp, data } = JSON.parse(cachedData);
    const cacheExpiry = 10 * 60 * 1000;

    if (Date.now() - timestamp < cacheExpiry) {
      console.log("Serving from cache:", data);
      return data;
    } else {
      console.log("Cache expired for:", city);
      localStorage.removeItem(city);
    }
  }
  return null;
}

function cacheData(city, data) {
  const maxCacheSize = 10;
  const cachedCities = JSON.parse(localStorage.getItem("cachedCities")) || [];

  if (!cachedCities.includes(city)) {
    if (cachedCities.length >= maxCacheSize) {
      const oldestCity = cachedCities.shift();
      localStorage.removeItem(oldestCity);
    }
    cachedCities.push(city);
    localStorage.setItem("cachedCities", JSON.stringify(cachedCities));
  }

  localStorage.setItem(
    city,
    JSON.stringify({
      timestamp: Date.now(),
      data,
    })
  );
}

function handleError(error) {
  console.error(`Failed to fetch weather data:`, error);
  throw error;
}

function updateUI() {}

function updateTempDisplay() {}
