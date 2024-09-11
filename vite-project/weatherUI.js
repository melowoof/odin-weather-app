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

// function returnWeatherIconSrc(weatherCondition, is_day) {
//   let iconUrl;

//   if (is_day) {
//     switch (true) {
//       case weatherCondition.toLowerCase().includes("sunny"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/sun.png";
//         break;
//       case weatherCondition.toLowerCase().includes("partly cloudy"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/partly-cloudy-day.png";
//         break;
//       case weatherCondition.toLowerCase().includes("cloudy"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/cloud.png";
//         break;
//       case weatherCondition.toLowerCase().includes("overcast"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/clouds.png";
//         break;
//       case weatherCondition.toLowerCase().includes("rain"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/rain.png";
//         break;
//       case weatherCondition.toLowerCase().includes("drizzle"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/light-rain.png";
//         break;
//       case weatherCondition.toLowerCase().includes("thunderstorms"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/storm.png";
//         break;
//       case weatherCondition.toLowerCase().includes("snow"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
//         break;
//       case weatherCondition.toLowerCase().includes("fog"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-night.png";
//         break;
//       case weatherCondition.toLowerCase().includes("mist"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
//         break;
//       case weatherCondition.toLowerCase().includes("haze"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
//         break;
//       case weatherCondition.toLowerCase().includes("windy"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/wind--v1.png";
//         break;
//     }
//   } else if (!is_day) {
//     switch (true) {
//       case weatherCondition.toLowerCase().includes("clear"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/bright-moon--v2.png";
//         break;
//       case weatherCondition.toLowerCase().includes("partly cloudy"):
//         iconUrl =
//           "https://img.icons8.com/ios-glyphs/30/partly-cloudy-night--v1.png";
//         break;
//       case weatherCondition.toLowerCase().includes("cloudy"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/cloud.png";
//         break;
//       case weatherCondition.toLowerCase().includes("overcast"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/clouds.png";
//         break;
//       case weatherCondition.toLowerCase().includes("rain"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/rainy-night.png";
//         break;
//       case weatherCondition.toLowerCase().includes("drizzle"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/light-rain.png";
//         break;
//       case weatherCondition.toLowerCase().includes("thunderstorms"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/storm.png";
//         break;
//       case weatherCondition.toLowerCase().includes("snow"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/snow.png";
//         break;
//       case weatherCondition.toLowerCase().includes("fog"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-night.png";
//         break;
//       case weatherCondition.toLowerCase().includes("mist"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
//         break;
//       case weatherCondition.toLowerCase().includes("haze"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/fog-day--v1.png";
//         break;
//       case weatherCondition.toLowerCase().includes("windy"):
//         iconUrl = "https://img.icons8.com/ios-glyphs/30/wind--v1.png";
//         break;
//     }
//   }

//   return iconUrl;
// }

export function hourlyForecast(data) {
  const hourlyForecast = document.querySelector("#hourly-forecast");
  //   let [sunriseTime, sunriseDate] = [
  //     convertTo24Hour(data.forecast.forecastday[0].astro.sunrise),
  //     0,
  //   ];
  //   let [sunsetTime, sunsetDate] = [
  //     convertTo24Hour(data.forecast.forecastday[0].astro.sunset),
  //     0,
  //   ];

  //   const currentTime = getTimeFromDateTime(data.location.localtime);
  // if (currentTime > sunriseTime && currentTime < sunsetTime) {
  //   [sunriseTime, sunriseDate] = [
  //     convertTo24Hour(data.forecast.forecastday[1].astro.sunrise),
  //     1,
  //   ];
  // } else if (currentTime > sunriseTime && currentTime > sunsetTime) {
  //   [sunriseTime, sunriseDate] = [
  //     convertTo24Hour(data.forecast.forecastday[1].astro.sunrise),
  //     1,
  //   ];
  //   [sunsetTime, sunsetDate] = [
  //     convertTo24Hour(data.forecast.forecastday[1].astro.sunset),
  //     1,
  //   ];
  // }

  hourlyForecast.innerHTML = "";

  const forecastHourNow = document.createElement("div");
  forecastHourNow.className = "forecast-hour";
  forecastHourNow.innerHTML = `<div class="forecast-hour-hour">Now</div>
            <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${
              data.current.condition.icon
            }"/></div>
            <div class="chance-of-rain"></div></div>
            <div class="forecast-hour-temperature">${convertTemp(
              data.current.temp_c
            )}&deg;</div>`;
  hourlyForecast.appendChild(forecastHourNow);

  const timeNow = getFormattedLocalDate();
  const nextForecastHour = getNextForecastHour(
    //   getTimeFromDateTime(data.location.localtime)
    getTimeFromDateTime(timeNow)
  );

  let nextForecastHourInt = Number(nextForecastHour.split(":")[0]);
  //   console.log(timeNow);

  if (nextForecastHourInt === 0) {
    nextForecastHourInt = 24;
  }
  let totalElements = 1; // Max 28

  for (let i = 0; i <= 1; i++) {
    let forecastTime;
    for (let j = nextForecastHourInt; j < 24; j++) {
      const forecastHour = document.createElement("div");
      forecastHour.className = "forecast-hour";
      forecastTime = getTimeFromDateTime(
        data.forecast.forecastday[i].hour[j].time
      );
      // console.log(i, j);

      //     if (sunriseDate === i) {
      //       console.log(forecastTime, sunriseTime);
      //     if (forecastTime > sunriseTime) {
      //       const sunTime = document.createElement("div");
      //       sunTime.innerHTML = `<div class="forecast-hour-hour">${convertTo12Hour(
      //         sunriseTime
      //       )}</div>
      //                     <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
      //                       data.forecast.forecastday[i].hour[j].condition.text,
      //                       data.forecast.forecastday[i].hour[j].time
      //                     )}"/></div>
      //                     <div class="chance-of-rain"></div></div>
      //                     <div class="forecast-hour-temperature">Sunset</div>`;
      //         hourlyForecast.appendChild(sunTime);
      //     }
      //   } else if (sunsetDate === i) {
      //     if (forecastTime > sunsetTime) {
      //       const sunTime = document.createElement("div");
      //       sunTime.innerHTML = `<div class="forecast-hour-hour">${convertTo12Hour(
      //         sunsetTime
      //       )}</div>
      //                     <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${returnWeatherIconSrc(
      //                       data.forecast.forecastday[i].hour[j].condition.text,
      //                       data.forecast.forecastday[i].hour[j].time
      //                     )}"/></div>
      //                     <div class="chance-of-rain"></div></div>
      //                     <div class="forecast-hour-temperature">Sunset</div>`;
      //         hourlyForecast.appendChild(sunTime);
      //         // console.log(sunsetTime);
      //     }
      //   }

      forecastHour.innerHTML = `<div class="forecast-hour-hour">${convertTo12HourHourOnly(
        getTimeFromDateTime(data.forecast.forecastday[i].hour[j].time)
      )}</div>
                      <div><div class="forecast-hour-weather-status-icon"><img width="32" height="32" src="${
                        data.current.condition.icon
                      }"/></div>
                      <div class="chance-of-rain">${chanceOfRain(
                        data.forecast.forecastday[i].hour[j].chance_of_rain
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

function getFormattedLocalDate() {
  const now = new Date(); // Create a Date object

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// function dateAndSunTimeToDateAndTime(date, sunTime) {
//   time = convertTo24Hour(sunTime);
//   return `${date} ${time}`;
// }

function chanceOfRain(data) {
  if (data !== 0) {
    return `${data} %`;
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
  return `${hours}<small>${modifier}</small>`;
}

function convertTo12Hour(time) {
  let [hours, minutes] = time.split(":").map(Number);
  const modifier = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return `${hours}:${minutes}<small>${modifier}</small>`;
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

export function tenDaysForecast(data) {
  const tenDayForecast = document.querySelector("#ten-day-forecast");
  tenDayForecast.innerHTML = "";

  const lowTempArray = [];
  const highTempArray = [];
  for (let i = 1; i < 10; i++) {
    lowTempArray.push(data.forecast.forecastday[i].day.mintemp_c);
    highTempArray.push(data.forecast.forecastday[i].day.maxtemp_c);
  }
  const lowestTemp = Math.min(...lowTempArray);
  const highestTemp = Math.max(...highTempArray);
  // console.log(lowestTemp, highestTemp);

  for (let i = 0; i < 10; i++) {
    const forecastDayDiv = document.createElement("div");
    const dateString =
      i === 0 ? "Today" : getWeekday(data.forecast.forecastday[i].date);

    forecastDayDiv.innerHTML = `<div class="forecast-day">
              <div class="forecast-day-date">${dateString}</div>
              <div class="forecast-day-weather-status"><img src="${
                data.forecast.forecastday[i].day.condition.icon
              }"
                  width="32" height="32" alt="" class="forecast-day-icon">
                <div class="forecast-day-chance-of-rain">${chanceOfRain(
                  data.forecast.forecastday[i].day.daily_chance_of_rain
                )}</div>
              </div>
              <div class="forecast-day-high-low-temp">
                <div class="forecast-day-low-temp">${convertTemp(
                  data.forecast.forecastday[i].day.mintemp_c
                )}&deg;</div>
                <div class="forecast-day-temperature-meter">
                  <div class="forecast-day-temperature-meter-filled" id="forecast-day-temperature-meter-filled-${i}">
                  </div>
                </div>
                <div class="forecast-day-high-temp">${convertTemp(
                  data.forecast.forecastday[i].day.maxtemp_c
                )}&deg;</div>
              </div>
            </div>`;

    tenDayForecast.appendChild(forecastDayDiv);
    const filledDiv = document.getElementById(
      `forecast-day-temperature-meter-filled-${i}`
    );
    const leftPercentage = getPercentage(
      lowestTemp,
      highestTemp,
      data.forecast.forecastday[i].day.mintemp_c
    );
    filledDiv.style.left = `${leftPercentage}%`;
    filledDiv.style.width = `${
      getPercentage(
        lowestTemp,
        highestTemp,
        data.forecast.forecastday[i].day.maxtemp_c
      ) - leftPercentage
    }%`;
  }
}

function getWeekday(dateString) {
  const date = new Date(dateString);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayIndex = date.getDay();
  return weekdays[dayIndex];
}

function getPercentage(min, max, value) {
  let percentage = ((value - min) / (max - min)) * 100;
  return percentage;
}

export function uvIndex(data) {
  const uvIndex = document.querySelector("#uv-index");
  uvIndex.innerHTML = "";
  const uvIndexValue = data.current.uv;
  let uvIndexLevel;
  const uvLeft = getPercentage(0, 11, uvIndexValue);
  // console.log(uvLeft);

  if (uvIndexValue >= 0 && uvIndexValue <= 2) {
    uvIndexLevel = "Low";
  } else if (uvIndexValue >= 3 && uvIndexValue <= 5) {
    uvIndexLevel = "Moderate";
  } else if (uvIndexValue >= 6 && uvIndexValue <= 7) {
    uvIndexLevel = "High";
  } else if (uvIndexValue >= 8 && uvIndexValue <= 10) {
    uvIndexLevel = "Very High";
  } else if (uvIndexValue >= 11) {
    uvIndexLevel = "Extreme";
  }

  const uvIndexDiv = document.createElement("div");
  uvIndexDiv.innerHTML = `<div class="uv-index-status">
              <div class="uv-index-value">${uvIndexValue}</div>
              <div class="uv-index-level">${uvIndexLevel}</div>
            </div>
            <div class="uv-index-meter-container">
              <div class="uv-index-meter">
                <div class="uv-index-meter-point"></div>
              </div>
            </div>
`;
  uvIndex.appendChild(uvIndexDiv);
  const uvIndexMeterPoint = document.querySelector(".uv-index-meter-point");
  uvIndexMeterPoint.style.left = `${uvLeft}%`;
}

export function twilight(data) {
  let sunrise = data.forecast.forecastday[0].astro.sunrise;
  let sunset = data.forecast.forecastday[0].astro.sunset;
  const currentTime = getTimeFromDateTime(data.location.localtime);
  // const currentTime = "14:30";

  const currentDate = new Date();
  const currentTimeObj = new Date(
    currentDate.toDateString() + " " + currentTime
  );
  const sunriseTimeObj = new Date(currentDate.toDateString() + " " + sunrise);
  const sunsetTimeObj = new Date(currentDate.toDateString() + " " + sunset);

  let nextTwilight = "SUNRISE";

  if (currentTimeObj >= sunriseTimeObj && currentTimeObj <= sunsetTimeObj) {
    sunrise = convertTo24Hour(data.forecast.forecastday[1].astro.sunrise);
    nextTwilight = "SUNSET";
  } else if (currentTime >= sunsetTimeObj) {
    sunrise = convertTo24Hour(data.forecast.forecastday[1].astro.sunrise);
    sunset = convertTo24Hour(data.forecast.forecastday[1].astro.sunset);
    nextTwilight = "SUNRISE";
  }

  // console.log(sunrise, sunset, nextTwilight, currentTime);
  const twilightDiv = document.querySelector("#twilight");
  const twilightDivName = document.querySelector(".grid-item-name.twilight");

  // twilightDivName.innerHTML = "";
  twilightDivName.innerHTML = nextTwilight;

  const twilightBigTime = document.querySelector("#twilight-big-time");
  const twilightSmallTime = document.querySelector("#twilight-small-time");

  // twilightBigTime.innerHTML = convertTo12Hour(convertTo24Hour(sunrise));

  twilightBigTime.innerHTML =
    nextTwilight === "SUNRISE"
      ? convertTo12Hour(convertTo24Hour(sunrise))
      : convertTo12Hour(convertTo24Hour(sunset));
  twilightSmallTime.innerHTML =
    nextTwilight === "SUNRISE"
      ? `Sunset: ${convertTo12Hour(convertTo24Hour(sunset))}`
      : `Sunrise: ${convertTo12Hour(convertTo24Hour(sunrise))}`;
}

export function windSpeed(data) {
  const windSpeedDiv = document.querySelector("#wind-speed");
  const windDirectionDiv = document.querySelector("#wind-direction");
  let windDirection = data.current.wind_dir;

  if (windDirection === "N") {
    windDirection = "North";
  } else if (windDirection === "S") {
    windDirection = "South";
  } else if (windDirection === "W") {
    windDirection = "West";
  } else if (windDirection === "E") {
    windDirection = "East";
  } else if (windDirection === "NW") {
    windDirection = "North West";
  } else if (windDirection === "NE") {
    windDirection = "North East";
  } else if (windDirection === "SW") {
    windDirection = "South West";
  } else if (windDirection === "SE") {
    windDirection = "South East";
  }

  windSpeedDiv.innerHTML = `${Math.floor(
    data.current.wind_kph
  )} <small>km/h</small>`;
  windDirectionDiv.innerHTML = `${windDirection}`;
}

export function precipitation(data) {
  const precipitationDiv = document.querySelector("#precipitation-level");
  precipitationDiv.innerHTML = `${Math.floor(
    data.forecast.forecastday[0].day.totalprecip_mm
  )} mm`;
}

export function feelsLike(data) {
  const feelsLikeDiv = document.querySelector("#feels-like");
  feelsLikeDiv.innerHTML = `${Math.floor(
    convertTemp(data.current.feelslike_c)
  )}&deg;`;
}

export function moonPhase(data) {
  const moonPhaseValueDiv = document.querySelector("#moon-phase-value");
  const nextMoonRise = document.querySelector("#next-moon-rise");

  let moonPhase = data.forecast.forecastday[0].astro.moon_phase;
  let moonrise = data.forecast.forecastday[0].astro.moonrise;
  // let moonset = data.forecast.forecastday[0].astro.moonset;
  // let moonsetYet = false;

  // const currentTime = getTimeFromDateTime(data.location.localtime);
  // const currentDate = new Date();
  // const currentTimeObj = new Date(
  //   currentDate.toDateString() + " " + currentTime
  // );
  // const moonriseTimeObj = new Date(currentDate.toDateString() + " " + moonrise);
  // const moonsetTimeObj = new Date(currentDate.toDateString() + " " + moonset);

  // if (currentTimeObj >= moonriseTimeObj && currentTimeObj <= moonsetTimeObj) {
  //   moonrise = convertTo24Hour(data.forecast.forecastday[1].astro.moonrise);
  //   moonsetYet = false;
  // } else if (currentTime >= moonsetTimeObj) {
  //   moonset = convertTo24Hour(data.forecast.forecastday[1].astro.moonset);
  //   moonsetYet = true;
  // }

  moonPhaseValueDiv.innerHTML = moonPhase;
  nextMoonRise.innerHTML = `Today's moonrise: ${convertTo12Hour(
    convertTo24Hour(moonrise)
  )}`;
}

export function visibility(data) {
  const visibilityRangeDiv = document.querySelector("#visibility-range");
  const visibilityDescDiv = document.querySelector("#visibility-desc");
  const visibilityValue = data.current.vis_km;
  let visibilityLevel;

  if (visibilityValue > 10) {
    visibilityLevel = "Clear visibility.";
  } else if (visibilityValue >= 6 && visibilityValue <= 10) {
    visibilityLevel = "Good visibility.";
  } else if (visibilityValue >= 3 && visibilityValue < 6) {
    visibilityLevel = "Moderate visibility.";
  } else if (visibilityValue >= 1 && visibilityValue < 3) {
    visibilityLevel = "Poor visibility.";
  } else if (visibilityValue < 1) {
    visibilityLevel = "Very Poor visibility.";
  } else {
    visibilityLevel = "Invalid visibility Value.";
  }

  visibilityRangeDiv.innerHTML = `${visibilityValue} km`;
  visibilityDescDiv.innerHTML = visibilityLevel;
}

export function humidity(data) {
  const humidityDiv = document.querySelector("#humidity-level");
  const dewPointDiv = document.querySelector("#dew-point");

  humidityDiv.innerHTML = `${data.current.humidity} %`;
  dewPointDiv.innerHTML = `The dew point is ${convertTemp(
    data.current.dewpoint_c
  )}&deg; right now.`;
}

export function pressure(data) {
  const pressureDiv = document.querySelector("#pressure");
  pressureDiv.innerHTML = `${data.current.pressure_mb} hPa`;
}

export function averages(data) {
  const averagesValueDiv = document.querySelector("#averages-value");
  const todayAverageDiv = document.querySelector("#today-average");
  const averageAverageDiv = document.querySelector("#average-average");

  const highTemp = data.forecast.forecastday[0].day.maxtemp_c;
  const lowTempArray = [];
  const highTempArray = [];
  for (let i = 1; i < 10; i++) {
    lowTempArray.push(data.forecast.forecastday[i].day.mintemp_c);
    highTempArray.push(data.forecast.forecastday[i].day.maxtemp_c);
  }
  const lowestTemp = Math.min(...lowTempArray);
  const highestTemp = Math.max(...highTempArray);
  const averageTemp = (highestTemp + lowestTemp) / 2;
  const averagesValue = averageTemp - highTemp;

  averagesValueDiv.innerHTML = `${Math.floor(averagesValue)}&deg;`;
  todayAverageDiv.innerHTML = `H:${Math.floor(highTemp)}&deg;`;
  averageAverageDiv.innerHTML = `H:${Math.floor(averageTemp)}&deg;`;
}
