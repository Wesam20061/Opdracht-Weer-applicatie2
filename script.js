const locationInput = document.getElementById('locationInput');
const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
const tempDisplay = document.getElementById('temp');
const humidityDisplay = document.getElementById('humidity');
const descriptionDisplay = document.getElementById('description');

function fetchWeatherData() {
    const location = locationInput.value;
    const apiKey = 'b00c37534d51294e6d4ecf423832ef00'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weerdata niet gevonden.');
            }
            return response.json();
        })
        .then(data => {
            tempDisplay.textContent = data.main.temp.toFixed(1);
            humidityDisplay.textContent = data.main.humidity;
            descriptionDisplay.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Fout bij het ophalen van weerdata:', error);
            alert('Fout bij het ophalen van de weerdata. Controleer de stadnaam en probeer het opnieuw.');
        });
}

fetchWeatherBtn.addEventListener('click', fetchWeatherData);
