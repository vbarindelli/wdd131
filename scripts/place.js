const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `@ <span class="highlight">${today.getFullYear()}</span> Virginia Haedo - Malaga, Spain`;



const lastModified = document.querySelector("#lastModified");
let modified = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modified}</span>`;
const wind = document.querySelector("#windChill");

function calculateWindChill(temp, windSpeed) {
    return 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
}

const temperature = 24;
const windSpeed = 15;

if (temperature <= 10 & windSpeed > 4.8) {
    windResult = calculateWindChill(temperature, windSpeed);
    windchill = Math.round(windResult);
}
else {
    windchill = "N/A";
}

wind.innerHTML = `${windchill} </span>`;

