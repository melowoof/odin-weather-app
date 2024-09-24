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

The front-end design was very tightly inspired by Apple's Weather app. Since this project is primarily on the back-end and revolves much around getting somewhat more used to APIs and data fetching, I didn't want to devolve too much time into designing something completely new. Apple's weather app seemed completely fine to imitate - it's aesthetically beautiful, and it has many different weather datas that I could get used to using the API key.

## Challenges

A challenge I'd faced at the start of the project was tinkering around with fetching data from the API server. Up until that point I'd done small assignments on fetching, but I'd wanted to implement caching functions as well as to not have to refetch data from the server every time the page refreshes, but instead store it on the local server.

A problem I started facing weeks after finishing the project was my forecast functions somehow returning errors after never having produced such outputs before. After some debugging, it turns out only that the free API I was using has a free month trial, where a forecast of 10 days is available for usage. But then after that one month period, the API then returns only 3 days. It was however an easy fix - I only had to change my for-loops to go to 3 instead of 10.

Not as much of a challenge as it is more of a chore, but something recurring throughout the project was writing functions for styling a combination static HTML and dynamic JavaScript for every present module in the web-app. The code becomes a mess after a while, and I had thought about maybe how it'll become better as I continue on with the curriculum and take on more in-depth lessons about advanced CSS.

## Notes

Working in-depth with some weather data throughout this project, I've noticed some odd inconsistencies or quirks in the API data. For example, I'm assuming that if a location the user searches has even very small patches of rain, the rain forecast will be shown as 100% (because the data is for the entire town/city). Another is the current temperature being lower or higher than the minimum or maximum temperature of the day.
