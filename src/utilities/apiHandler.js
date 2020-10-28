import { getUnit } from './usefullMethods';

const apiKeys = {
  ipGeolocation: '7202d97c1c3e489392a751327f3ccb8f',
  openWeather: '6d45528c2a76ce912279f18cb573306c',
  unsplash: 'PteMhxfvY7LXCzelxMqDvwwojo-b0Yyib05cYQ48v4I',
};

async function getUserCity() {
  const response = await fetch(`https:api.ipgeolocation.io/ipgeo?apiKey=${apiKeys.ipGeolocation}`);
  const { city } = await response.json();
  return city;
}

async function getTodayWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&${getUnit() === 'C' ? 'units=metric' : ''}&appid=${apiKeys.openWeather}`,
  );

  if (response.status === 404) {
    throw new Error('City not found');
  }

  const weatherData = await response.json();
  return weatherData;
}

async function getForcastWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&${getUnit() === 'C' ? 'units=metric' : ''}&appid=${apiKeys.openWeather}`,
  );

  if (response.status === 404) {
    throw new Error('City not found');
  }

  const weatherData = await response.json();
  return weatherData;
}

async function getCityImage(city) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=1&query=${city}&client_id=${apiKeys.unsplash}`,
  );

  if (response.status === 404) {
    throw new Error('City not found');
  }

  const [{ urls: { regular } }] = await response.json();

  return regular;
}

export {
  getUserCity,
  getCityImage,
  getTodayWeather,
  getForcastWeather,
};