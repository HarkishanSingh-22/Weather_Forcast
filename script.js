const inputCity = document.getElementById("input-city");
const weatherImg = document.getElementById("weather-img");
const tempCelcius = document.getElementById("celcius");
const showCity = document.getElementById("show-city");
const humidityPer = document.getElementById("humidity-percentage");
const windSpeed = document.getElementById("wind-speed");
const weatherIcon = document.querySelector(".weather-img")

const apiKey = "a49268860548009a937dbd24737fa8b2";

async function checkWeather() {

    const cityValue = inputCity.value;
    if (cityValue.trim() === "") {
        alert("Please enter a valid city name");
        return;
    }



    const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityValue}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City Not found ❌\nCheck spelling and try again");
        inputCity.value = "";
    }


    tempCelcius.innerText = Math.round(data.main.temp) + "°C";
    showCity.innerText = data.name;
    humidityPer.innerText = data.main.humidity + "%";
    windSpeed.innerText = data.wind.speed + " km/h";
    showCity.innerHTML = data.name;

    inputCity.value = "";



    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assests/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assests/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assests/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assests/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assests/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "assests/snow.png"
    }


}


document.getElementById("search-btn").addEventListener("click", checkWeather);
document.getElementById("input-city").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkWeather();
    }
});



