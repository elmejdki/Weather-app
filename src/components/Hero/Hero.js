/* eslint-disable camelcase */
import countries from '../../countries.json';

export default function Hero(todayWeather) {
  const [weather] = todayWeather.weather;

  const {
    feels_like, temp_min, temp_max, temp, pressure, humidity,
  } = todayWeather.main;

  const { dt, timezone } = todayWeather;
  const dateTime = new Date(dt * 1000 - timezone * 1000);
  const { country, sunrise, sunset } = todayWeather.sys;
  const sunriseDate = new Date(sunrise * 1000 - timezone * 1000);
  const sunsetDate = new Date(sunset * 1000 - timezone * 1000);

  const main = document.createElement('main');

  const hero = document.createElement('div');

  const locationDetails = document.createElement('div');
  const cityName = document.createElement('div');
  const countryName = document.createElement('div');
  const currentTemp = document.createElement('div');
  const date = document.createElement('div');

  const todayWeatherInfo = document.createElement('div');

  const weatherStatus = document.createElement('div');
  const weatherLogo = document.createElement('div');
  const status = document.createElement('div');

  const details = document.createElement('div');

  const tempContainer = document.createElement('div');
  const feelsLike = document.createElement('div');
  const minTemp = document.createElement('div');
  const maxTemp = document.createElement('div');
  const sunriseContainer = document.createElement('div');

  const otherDetails = document.createElement('div');
  const humidityContainer = document.createElement('div');
  const pressureContainer = document.createElement('div');
  const speed = document.createElement('div');
  const sunsetContainer = document.createElement('div');

  hero.className = 'weather-details';
  locationDetails.className = 'location-details';
  cityName.className = 'city-name';
  countryName.className = 'country-name';
  currentTemp.className = 'current-temp tempature';
  date.className = 'date';
  todayWeatherInfo.className = 'today-weather-info';
  weatherStatus.className = 'weather-status';
  weatherLogo.className = `weather-logo ${weather.main.toLowerCase()}`;
  status.className = 'status';
  details.className = 'details';

  tempContainer.className = 'temp';
  feelsLike.className = 'feels_like tempature';
  minTemp.className = 'min tempature';
  maxTemp.className = 'max tempature';
  sunriseContainer.className = 'sunrise';

  otherDetails.className = 'other-details';
  humidityContainer.className = 'humidity';
  pressureContainer.className = 'pressure';
  speed.className = 'speed';
  sunsetContainer.className = 'sunset';

  cityName.textContent = todayWeather.name;
  countryName.textContent = countries[country];
  currentTemp.innerHTML = `<span>${temp}</span>°`;
  date.textContent = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
  status.textContent = weather.description;

  feelsLike.innerHTML = `Feels Like <span>${feels_like}</span>°`;
  minTemp.innerHTML = `min <span>${temp_min}</span>°`;
  maxTemp.innerHTML = `max <span>${temp_max}</span>°`;
  sunriseContainer.innerHTML = `Sunrise <span>${`${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`}</span>`;

  humidityContainer.innerHTML = `Humidity <span>${humidity}</span>%`;
  pressureContainer.innerHTML = `Pressure <span>${pressure}</span> hPA`;
  speed.innerHTML = `Wind <span>${todayWeather.wind.speed}</span> M/s`;
  sunsetContainer.innerHTML = `Sunset <span>${`${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`}</span>`;

  locationDetails.appendChild(cityName);
  locationDetails.appendChild(countryName);
  locationDetails.appendChild(currentTemp);
  locationDetails.appendChild(date);
  hero.appendChild(locationDetails);

  todayWeatherInfo.appendChild(weatherStatus);
  weatherStatus.appendChild(weatherLogo);
  weatherStatus.appendChild(status);

  tempContainer.appendChild(feelsLike);
  tempContainer.appendChild(minTemp);
  tempContainer.appendChild(maxTemp);
  tempContainer.appendChild(sunriseContainer);
  details.appendChild(tempContainer);

  otherDetails.appendChild(humidityContainer);
  otherDetails.appendChild(pressureContainer);
  otherDetails.appendChild(speed);
  otherDetails.appendChild(sunsetContainer);
  details.appendChild(otherDetails);

  todayWeatherInfo.appendChild(details);

  hero.appendChild(todayWeatherInfo);
  main.appendChild(hero);

  return main;
}