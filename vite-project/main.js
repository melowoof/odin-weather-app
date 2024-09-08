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

fetchWeatherData("paris");
currentWeatherScrollTransform();
