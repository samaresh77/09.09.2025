const apiKey = "02100630bdd42b2a066d3e5d1ebf86c2"; // 🔑 Replace this with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const modeToggle = document.getElementById("modeToggle");

async function getWeatherByCity(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

async function getWeatherByCoords(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert("Unable to fetch location weather");
  }
}

function displayWeather(data) {
  cityName.textContent = data.name;
  temp.textContent = `${data.main.temp.toFixed(1)}°C`;
  condition.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// --- Search Button ---
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeatherByCity(city);
  else alert("Please enter a city name");
});

// --- Enter Key Trigger ---
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

// --- Dark/Light Mode ---
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// --- Geolocation ---
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCoords(lat, lon);
      },
      (error) => {
        console.warn("Geolocation blocked or failed:", error.message);
        alert("Unable to access location. Please search manually.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});
