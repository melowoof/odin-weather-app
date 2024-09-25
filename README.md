# Weather-app

A weather app using weatherAPI
![alt text](<Safari_Personal — Vite App_0924_j0GngKoq.gif>)

## Links

[Assignment link](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)
[Preview link](https://melowoof.github.io/weather-app/)

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

The front-end design for this was tightly inspired by Apple's Weather app. Since this project is primarily focused on the back-end and revolves mostly around becoming more accustomed to APIs and data fetching, I'd decided it was not worth it to invest too much time into designing something completely new. Imitating Apple's Weather app seemed appropriate—it's aesthetically beautiful, and it offers various weather data that can be utilized with the API key.

## Challenges

A challenge encountered at the start of the project was tinkering with fetching functions and promise handling. Up until that point, I'd only done small assignments on fetching, but there was a desire in this particular project to implement caching functions as to avoid having to refetch data from the server every time the page refreshes, and instead storing it locally.

Something that arose weeks after finishing the project was how the forecast functions would start returning errors that previously wasn't there. After some debugging, it just turns out that the free API that was being used has a one-month trial period, during which a forecast of 10 days is available. After that month though, the API returns only 3 days. This was ultimately an easy fix, and needed only a change in the for-loops to iterate to 3 days instead of 10.

## Notes

Working in-depth with weather data throughout this project revealed some odd inconsistencies or quirks in the API data. For example, if a location searched by the user has even very small patches of rain, the rain forecast will be shown as 100% (because the data is - by my assumptsion -for the entire town / city). Another inconsistency is that sometimes the current temperature will be lower or higher than the minimum or maximum temperature of that day.
