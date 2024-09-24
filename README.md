# Weather-app

A weather app using weatherAPI
![[Safari_Personal — Vite App_0924_j0GngKoq.gif]]

## Links

[Assignment link](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)
[Preview link](https://melowoof.github.io/odin-weather-app/)

## Features

- Current weather conditions (temperature, humidity, wind speed, ...)
- Hourly forecasts
- Daily forecasts (up to three days)
- Air quality index
- UV index
- Sunrise and sunset times
- Background colors based on weather conditions

## Summary

A weather app for one of The Odin Project's assignments - on the topic of learning and practicing with fetch(), APIs, asynchronous code, and async/await.

The front-end design was tightly inspired by Apple's Weather app. Since this project is primarily focused on the back-end and revolves around becoming more accustomed to APIs and data fetching, it was decided not to invest too much time into designing something completely new. Imitating Apple's Weather app was deemed appropriate—it is aesthetically beautiful and offers various weather data that can be utilized with the API key.

## Challenges

A challenge encountered at the start of the project was tinkering with fetching data from the API server. Up until that point, small assignments on fetching had been completed, but there was a desire to implement caching functions to avoid refetching data from the server every time the page refreshes, instead storing it on the local server.

A problem that arose weeks after finishing the project involved the forecast functions returning errors after previously not producing such outputs. After some debugging, it was discovered that the free API being used has a one-month trial period, during which a forecast of 10 days is available. After that month, the API returns only 3 days. This was an easy fix—only a change in the for-loops was needed to iterate to 3 instead of 10.

Not so much a challenge as a recurring chore throughout the project was writing functions for styling a combination of static HTML and dynamic JavaScript for every module in the web app. The code became messy over time, leading to thoughts about how it might improve with continued progress in the curriculum and more in-depth lessons on advanced CSS.

## Notes

Working in-depth with weather data throughout this project revealed some odd inconsistencies or quirks in the API data. For example, if a location searched by the user has even very small patches of rain, the rain forecast is shown as 100% (because the data is for the entire town or city). Another inconsistency is the current temperature being lower or higher than the minimum or maximum temperature of the day.
