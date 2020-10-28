import './main.scss';
import renderHome from './components/Home/Home';
import {
  getUserCity, getCityImage, getTodayWeather, getForcastWeather,
} from './utilities/apiHandler';
import renderEvents, { showError, fixMixedContent } from './utilities/renderUI';

async function run() {
  try {
    fixMixedContent();
    const userCity = await getUserCity();
    const weatherData = await getTodayWeather(userCity);
    const forcastWeather = await getForcastWeather(userCity);
    const cityImage = await getCityImage(userCity);

    renderHome(weatherData, forcastWeather, cityImage);
    renderEvents();
  } catch (err) {
    showError(err.message);
  }
}

run();
