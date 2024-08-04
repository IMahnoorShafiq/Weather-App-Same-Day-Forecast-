async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '5560694c5487df96c723cdd3a1997398';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(`Fetching weather data for: ${city}`);  

    try {
        // This sends an HTTP request to the API and retrieves the response as JSON.
        const response = await fetch(url);
        const data = await response.json();

        console.log('API Response:', data);  

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').innerHTML = `<p>Failed to fetch data</p>`;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    // Using Open weather icons png 
    const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; 

    const weatherHtml = `
            <img src="${weatherIconUrl}" alt="${data.weather[0].description}" class="weather-icon"/>

       
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>${data.weather[0].main}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherResult.innerHTML = weatherHtml;
}
// for cdn icons 
// function getWeatherIcon(weatherMain) {
//     switch (weatherMain.toLowerCase()) {
//         case 'clear':
//             return 'fa-sun';
//         case 'clouds':
//             return 'fa-cloud';
//         case 'rain':
//             return 'fa-cloud-rain';
//         case 'snow':
//             return 'fa-snowflake';
//         case 'thunderstorm':
//             return 'fa-bolt';
//         default:
//             return 'fa-cloud';
//     }
// } <i class="fas ${iconClass} weather-icon"></i>
