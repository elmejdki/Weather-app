const apiKeys = {
  ipGeolocation: '7202d97c1c3e489392a751327f3ccb8f',
  openWeather: '6d45528c2a76ce912279f18cb573306c',
};

async function getUserCity() {
  const response = await fetch(`https:api.ipgeolocation.io/ipgeo?apiKey=${apiKeys.ipGeolocation}`);
  const { city } = await response.json();
  return city;
}

function getUnit() {
  const unit = localStorage.getItem('unit');
  if (unit && unit === 'F') {
    return 'F';
  }

  localStorage.setItem('unit', 'C');
  return 'C';
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

async function run() {
  try {
    const userCity = await getUserCity();
    const weatherData = await getTodayWeather(userCity);

    console.log(weatherData);
  } catch (err) {
    console.log(err.message);
  }
}

run();
