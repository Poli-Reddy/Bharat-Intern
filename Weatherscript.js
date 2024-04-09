const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();

// Function work when user input the city name
form.addEventListener('submit', function (e) {

    // preventDefault() to stop page reload
    e.preventDefault();

    // Updating the city name
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = '931f131dde3f4ae2fcbc3289fc646471'; // Wrap the API ID in quotes
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`; // Wrap the URL in backticks

    // fetching data from the weather api
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        // Updating the DOM
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span>`; // Corrected the syntax
        weather.innerHTML = weatherMain; // Removed duplicate line

        // Updating the Images according to the weather
        if (weatherMain == 'Clear') {
            image.src = './Images/sunny.png'; // Corrected the path
            myWeatherContainer.style.backgroundColor = '#ec6e4c';
        }
        if (weatherMain == 'Clouds') {
            image.src = './Images/clouds.png'; // Corrected the path
            myWeatherContainer.style.backgroundColor = '#86d3d3';
        }
        if (weatherMain == 'Rain') {
            image.src = './Images/Rain.png'; // Corrected the path
            myWeatherContainer.style.backgroundColor = '#494bcf';
        }
        if (weatherMain == 'Drizzle') {
            image.src = './Images/Drizzle.png'; // Corrected the path
            myWeatherContainer.style.backgroundColor = '#8ecfcf';
        }
        if (weatherMain == 'Haze') {
            image.src = './Images/Haze.png'; // Corrected the path
            myWeatherContainer.style.backgroundColor = '#d8ced2';
        }

        // Updating dates
        const currentMonth = date.getMonth();
        switch (currentMonth) {
            case 0:
                dates.innerHTML = `${date.getDate()}, Jan`; // Corrected the syntax
                break;
            case 1:
                dates.innerHTML = `${date.getDate()}, Feb`; // Corrected the syntax
                break;
            case 2:
                dates.innerHTML = `${date.getDate()}, Mar`; // Corrected the syntax
                break;
            case 3:
                dates.innerHTML = `${date.getDate()}, Apr`; // Corrected the syntax
                break;
            case 4:
                dates.innerHTML = `${date.getDate()}, May`; // Corrected the syntax
                break;
            case 5:
                dates.innerHTML = `${date.getDate()}, Jun`; // Corrected the syntax
                break;
            case 6:
                dates.innerHTML = `${date.getDate()}, Jul`; // Corrected the syntax
                break;
            case 7:
                dates.innerHTML = `${date.getDate()}, Aug`; // Corrected the syntax
                break;
            case 8:
                dates.innerHTML = `${date.getDate()}, Sept.`; // Corrected the syntax
                break;
            case 9:
                dates.innerHTML = `${date.getDate()}, Oct.`; // Corrected the syntax
                break;
            case 10:
                dates.innerHTML = `${date.getDate()}, Nov`; // Corrected the syntax
                break;
            case 11:
                dates.innerHTML = `${date.getDate()}, Dec`; // Corrected the syntax
                break;
        }

        // Updating times       
        function leftInterval() {
            const left = document.getElementById('todayTime')
            let leftDate = new Date();
            let hours = leftDate.getHours();
            let minutes = leftDate.getMinutes();
            let seconds = leftDate.getSeconds();

            if (hours == 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours = hours - 12;
            }
            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`; // Corrected the syntax
        }
        setInterval(leftInterval, 1000);
    });
});
