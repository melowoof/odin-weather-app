import * as weatherAPI from "./weatherAPI.js";

let currentTempUnit = "C";

export function currentWeather(data) {
  const temperature = document.querySelectorAll(
    "#current-weather-container .current-weather-temperature"
  );
  const weatherStatus = document.querySelectorAll(
    "#current-weather-container .current-weather-status"
  );

  const location = document.querySelector("#location");

  temperature.forEach((temp) => {
    // console.log(data);
    temp.textContent = `${convertTemp(data.current.temp_c)}`;
  });
  weatherStatus.forEach((status) => {
    status.textContent = data.current.condition.text;
  });
  location.textContent = data.location.name;
}

function returnWeatherIconSrc(weatherCondition, time) {
  let iconUrl;
  const timeOfDay = getTimeFromDateTime(time);
  let period;

  if (timeOfDay >= "21:00" || timeOfDay < "05:00") {
    period = "night";
  } else {
    period = "day";
  }

  if (period === "day") {
    switch (true) {
      case weatherCondition.toLowerCase().includes("sunny"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/sun.png";
        break;
      case weatherCondition.toLowerCase().includes("partly cloudy"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/partly-cloudy-day.png";
        break;
      case weatherCondition.toLowerCase().includes("cloudy"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/cloud.png";
        break;
      case weatherCondition.toLowerCase().includes("overcast"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/clouds.png";
        break;
      case weatherCondition.toLowerCase().includes("rain"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/rain.png";
        break;
      case weatherCondition.toLowerCase().includes("drizzle"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/light-rain.png";
        break;
      // case weatherCondition.toLowerCase().includes("heavy rain"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/rain.png";
      //   break;
      case weatherCondition.toLowerCase().includes("thunderstorms"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/storm.png";
        break;
      case weatherCondition.toLowerCase().includes("snow"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
        break;
      // case weatherCondition.toLowerCase().includes("light snow"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
      //   break;
      // case weatherCondition.toLowerCase().includes("heavy snow"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/snow-storm.png";
      //   break;
      case weatherCondition.toLowerCase().includes("fog"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-night.png";
        break;
      case weatherCondition.toLowerCase().includes("mist"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
        break;
      case weatherCondition.toLowerCase().includes("haze"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
        break;
      case weatherCondition.toLowerCase().includes("windy"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/wind--v1.png";
        break;
    }
  } else if (period === "night") {
    switch (true) {
      case weatherCondition.toLowerCase().includes("clear"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/bright-moon--v2.png";
        break;
      case weatherCondition.toLowerCase().includes("partly cloudy"):
        iconUrl =
          "https://img.icons8.com/ios-glyphs/30/partly-cloudy-night--v1.png";
        break;
      case weatherCondition.toLowerCase().includes("cloudy"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/cloud.png";
        break;
      case weatherCondition.toLowerCase().includes("overcast"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/clouds.png";
        break;
      case weatherCondition.toLowerCase().includes("rain"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/rainy-night.png";
        break;
      case weatherCondition.toLowerCase().includes("drizzle"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/light-rain.png";
        break;
      // case weatherCondition.toLowerCase().includes("heavy rain"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/rain.png";
      //   break;
      case weatherCondition.toLowerCase().includes("thunderstorms"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/storm.png";
        break;
      case weatherCondition.toLowerCase().includes("snow"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
        break;
      // case weatherCondition.toLowerCase().includes("light snow"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
      //   break;
      // case weatherCondition.toLowerCase().includes("heavy snow"):
      //   iconUrl = "https://img.icons8.com/ios-glyphs/30/snow-storm.png";
      //   break;
      case weatherCondition.toLowerCase().includes("fog"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-night.png";
        break;
      case weatherCondition.toLowerCase().includes("mist"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
        break;
      case weatherCondition.toLowerCase().includes("haze"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
        break;
      case weatherCondition.toLowerCase().includes("windy"):
        iconUrl = "https://img.icons8.com/ios-glyphs/30/wind--v1.png";
        break;
    }
  }

  return iconUrl;
}

export function hourlyForecast(data) {
  const hourlyForecast = document.querySelector("#hourly-forecast");
  let [sunriseTime, sunriseDate] = [
    convertTo24Hour(data.forecast.forecastday[0].astro.sunrise),
    0,
  ];
  let [sunsetTime, sunsetDate] = [
    convertTo24Hour(data.forecast.forecastday[0].astro.sunset),
    0,
  ];

  const currentTime = getTimeFromDateTime(data.location.localtime);
  if (currentTime > sunriseTime && currentTime < sunsetTime) {
    [sunriseTime, sunriseDate] = [
      convertTo24Hour(data.forecast.forecastday[1].astro.sunrise),
      1,
    ];
  } else if (currentTime > sunriseTime && currentTime > sunsetTime) {
    [sunriseTime, sunriseDate] = [
      convertTo24Hour(data.forecast.forecastday[1].astro.sunrise),
      1,
    ];
    [sunsetTime, sunsetDate] = [
      convertTo24Hour(data.forecast.forecastday[1].astro.sunset),
      1,
    ];
  }

  hourlyForecast.innerHTML = "";

  const forecastHourNow = document.createElement("div");
  forecastHourNow.className = "forecast-hour";
  forecastHourNow.innerHTML = `<div class="forecast-hour-hour">Now</div>
            <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
              data.current.condition.text,
              data.location.localtime
            )}"/></div>
            <div class="chance-of-rain"></div></div>
            <div class="forecast-hour-temperature">${convertTemp(
              data.current.temp_c
            )}&deg;</div>`;
  hourlyForecast.appendChild(forecastHourNow);

  const nextForecastHour = getNextForecastHour(
    getTimeFromDateTime(data.location.localtime)
  );
  //   console.log(nextForecastHour);
  let nextForecastHourInt = Number(nextForecastHour.split(":")[0]);
  let totalElements = 1; // Max 28

  for (let i = 0; i <= 1; i++) {
    let forecastTime;
    for (let j = nextForecastHourInt; j <= 23; j++) {
      const forecastHour = document.createElement("div");
      forecastHour.className = "forecast-hour";
      forecastTime = getTimeFromDateTime(
        data.forecast.forecastday[i].hour[j].time
      );
        

        if (sunriseDate === i) {
          console.log(forecastTime, sunriseTime);
        if (forecastTime > sunriseTime) {
          const sunTime = document.createElement("div");
          sunTime.innerHTML = `<div class="forecast-hour-hour">${convertTo12Hour(
            sunriseTime
          )}</div>
                        <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
                          data.forecast.forecastday[i].hour[j].condition.text,
                          data.forecast.forecastday[i].hour[j].time
                        )}"/></div>
                        <div class="chance-of-rain"></div></div>
                        <div class="forecast-hour-temperature">Sunset</div>`;
            hourlyForecast.appendChild(sunTime);
        }
      } else if (sunsetDate === i) {
        if (forecastTime > sunsetTime) {
          const sunTime = document.createElement("div");
          sunTime.innerHTML = `<div class="forecast-hour-hour">${convertTo12Hour(
            sunsetTime
          )}</div>
                        <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
                          data.forecast.forecastday[i].hour[j].condition.text,
                          data.forecast.forecastday[i].hour[j].time
                        )}"/></div>
                        <div class="chance-of-rain"></div></div>
                        <div class="forecast-hour-temperature">Sunset</div>`;
            hourlyForecast.appendChild(sunTime);
            // console.log(sunsetTime);
        }
      }
      

      forecastHour.innerHTML = `<div class="forecast-hour-hour">${convertTo12HourHourOnly(
        getTimeFromDateTime(data.forecast.forecastday[i].hour[j].time)
      )}</div>
                      <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
                        data.forecast.forecastday[i].hour[j].condition.text,
                        data.forecast.forecastday[i].hour[j].time
                      )}"/></div>
                      <div class="chance-of-rain">${chanceOfRain(
                        data.forecast.forecastday[i].hour[j]
                      )}</div></div>
                      <div class="forecast-hour-temperature">${convertTemp(
                        data.forecast.forecastday[i].hour[j].temp_c
                      )}&deg;</div>`;

      hourlyForecast.appendChild(forecastHour);
      totalElements++;
      forecastTime++;
      if (totalElements >= 25) {
        break;
      }
    }
    forecastTime = 0;
    nextForecastHourInt = 0;
  }
}

function dateAndTimeToUnix(dateTime) {}

function dateAndSunTimeToDateAndTime(date, sunTime) {
  time = convertTo24Hour(sunTime);
  return `${date} ${time}`;
}

function chanceOfRain(data) {
  if (data.chance_of_rain !== 0) {
    return `${data.chance_of_rain} %`;
  } else {
    return "";
  }
}

function convertTo12HourHourOnly(time) {
  let hours = Number(time.split(":")[0]);
  const modifier = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return `${hours}${modifier}`;
}

function convertTo12Hour(time) {
  let [hours, minutes] = time.split(":").map(Number);
  const modifier = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return `${hours}:${minutes}${modifier}`;
}

function convertTo24Hour(time) {
  const regex = /^(0?[1-9]|1[0-2]):([0-5][0-9]) ?([AP]M)$/i;
  const match = time.match(regex);

  if (!match) {
    throw new Error("Invalid time format. Please use 'hh:mm AM/PM'.");
  }
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "PM" && hours < 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

function getNextForecastHour(time) {
  const hourPlus = Number(time.split(":")[0]) + 1;
  const hourPlusString = hourPlus.toString().padStart(2, "0");
  if (hourPlus > 23) {
    return "00:00";
  } else {
    return `${hourPlusString}:00`;
  }
}

function getTimeFromDateTime(dateTImeString) {
  const time = dateTImeString.match(/\d{2}:\d{2}$/)[0];
  return time;
}

export function currentWeatherScrollOpacity() {
  const element1 = document.querySelector("#temperature-weather-status-normal");
  const element2 = document.querySelector(
    "#temperature-weather-status-minimized"
  );
  const scrollThreshold = 100;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      element1.style.opacity = "0";
      element2.style.opacity = "1";
    } else {
      element1.style.opacity = "1";
      element2.style.opacity = "0";
    }
  });
}

function convertTemp(temp) {
  // if (temp === C and currentTempUnit === C) {don't do anything} else if (temp === C and currentTempUnit === F) {convert temp to F}
  if (currentTempUnit === "C") {
    return Math.floor(temp);
  } else {
    return Math.floor((temp * 9) / 5 + 32);
  }
}

function toggleTempUnit() {
  if (currentTempUnit === "C") {
    currentTempUnit = "F";
  } else {
    currentTempUnit = "C";
  }
}

// export function searchEvent() {
//   const searchInput = document.querySelector("#search-box");
//   searchInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//       const city = event.target.value;
//       if (city) {
//         weatherAPI.fetchWeatherData(city).then((data) => {
//           if (data) {
//             console.log(data);
//             return data;
//           }
//         });
//       }
//     }
//   });
// }

// export async function search() {
//   const city = event.target.value;
//   if (city) {
//     const weatherData = await weatherAPI.fetchWeatherData(city);
//     if (weatherData) {
//       console.log("Search result:", weatherData);
//       return weatherData;
//     }
//   }
// }
