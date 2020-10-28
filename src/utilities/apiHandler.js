import { getUnit } from './usefullMethods';
import apiKeys from './secrets.json';

async function getUserCity() {
  const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeys.ipGeolocation}`);
  const { city } = await response.json();
  return city;
}

async function getTodayWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&${getUnit() === 'C' ? 'units=metric' : ''}&appid=${apiKeys.openWeather}`,
  );

  if (response.status === 200) {
    const weatherData = await response.json();
    return weatherData;
  }

  throw new Error('City not found');
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

  if (response.status === 200) {
    const [{ urls: { regular } }] = await response.json();
    return regular;
  }

  return 'https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80';
}

export {
  getUserCity,
  getCityImage,
  getTodayWeather,
  getForcastWeather,
};