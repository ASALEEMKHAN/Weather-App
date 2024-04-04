const apiKey = "71e50190d65e92e140dec3ee5d0b837f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);
  var data = await response.json();

  // console.log(data);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Media/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Media/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Media/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Media/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Media/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

