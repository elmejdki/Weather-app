import getHeader from '../Header/Header';
import getHero from '../Hero/Hero';
import getForcast from '../Forcast/Forcast';

export default function (todayWeather, forcastWeather, cityImage) {
  const container = document.createElement('div');
  const { body } = document;

  container.className = 'container';
  container.style.backgroundImage = `url(${cityImage})`;

  const header = getHeader();
  const heroSection = getHero(todayWeather);
  const forcastSection = getForcast(forcastWeather);

  container.appendChild(header);
  heroSection.appendChild(forcastSection);
  container.appendChild(heroSection);
  body.innerHTML = '';
  body.appendChild(container);
}