import './main.scss';
import renderHome from './components/Home/Home';
import {
  getUserCity, getCityImage, getTodayWeather, getForcastWeather,
} from './utilities/apiHandler';
import renderUI from './utilities/renderUI';

async function run() {
  try {
    const userCity = await getUserCity();
    const weatherData = await getTodayWeather(userCity);
    const forcastWeather = await getForcastWeather(userCity);
    const cityImage = await getCityImage(userCity);

    renderHome(weatherData, forcastWeather, cityImage);
    renderUI();
  } catch (err) {
    console.log(err.message);
  }
}

run();
