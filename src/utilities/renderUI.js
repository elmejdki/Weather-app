import { celciusToFarenheit, farenheitToCelcius } from './usefullMethods';
import { getCityImage, getTodayWeather, getForcastWeather } from './apiHandler';
import renderHome from '../components/Home/Home';

function showError(err) {
  const error = document.querySelector('.field-group .error');
  const loader = document.querySelector('.loader');
  if (error && loader) {
    error.textContent = err;
    error.style.display = 'block';
    loader.style.display = 'none';

    setTimeout(() => {
      error.style.display = 'none';
    }, 3000);
  } else {
    const { body } = document;
    body.textContent = err;
    body.style.color = 'red';
  }
}

function fixMixedContent() {
  const { head } = document;
  const meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  meta.setAttribute('content', 'upgrade-insecure-requests');

  head.appendChild(meta);
}

export default function renderEvents() {
  const farenheitBtn = document.querySelector('.temprature-units button:last-child');
  const celciusBtn = document.querySelector('.temprature-units button:first-child');
  const tempatureContainers = document.querySelectorAll('.tempature span');
  const loader = document.querySelector('.loader');
  const searchInput = document.getElementById('country');

  function switchClassInBtn() {
    farenheitBtn.classList.toggle('selected');
    celciusBtn.classList.toggle('selected');
  }

  async function renderUI(city) {
    try {
      loader.style.display = 'block';
      const weatherData = await getTodayWeather(city);
      const forcastWeather = await getForcastWeather(city);
      const cityImage = await getCityImage(city);

      renderHome(weatherData, forcastWeather, cityImage);
      loader.style.display = 'none';
      renderEvents();
    } catch (err) {
      showError(err.message);
    }
  }

  searchInput.addEventListener('keyup', e => {
    const city = e.currentTarget.value.trim();
    if (e.code === 'Enter' && city.length > 0) {
      renderUI(city);
    }
  });

  farenheitBtn.addEventListener('click', e => {
    if (!e.currentTarget.classList.contains('selected')) {
      localStorage.setItem('unit', 'F');
      switchClassInBtn();

      tempatureContainers.forEach(container => {
        container.textContent = celciusToFarenheit(parseFloat(container.textContent));
      });
    }
  });

  celciusBtn.addEventListener('click', e => {
    if (!e.currentTarget.classList.contains('selected')) {
      localStorage.setItem('unit', 'C');
      switchClassInBtn();

      tempatureContainers.forEach(container => {
        container.textContent = farenheitToCelcius(parseFloat(container.textContent));
      });
    }
  });
}

export { showError, fixMixedContent };
