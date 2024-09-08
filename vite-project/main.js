import "./style.css";
import "./normalize.css";
import { fetchWeatherData } from "./weatherAPI.js";

function currentWeatherScrollTransform() {
  const currentWeatherContainerRow = document.querySelector(
    "#current-weather-container-row"
  );
  const offset = 600;
  const scrollThreshold = 100;
  const elementsToTransform = document.querySelectorAll(
    ".current-weather-transform"
  );

  window.addEventListener("scroll", () => {
    const rect = currentWeatherContainerRow.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - offset && rect.bottom >= 0;

    if (window.scrollY > scrollThreshold) {
      elementsToTransform.forEach((element) => {
        element.classList.add("minimized");
      });
    } else {
      elementsToTransform.forEach((element) => {
        element.classList.remove("minimized");
      });
    }
  });
}

function currentWeatherScrollOpacity() {
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

fetchWeatherData("paris");
// currentWeatherScrollTransform();
currentWeatherScrollOpacity();