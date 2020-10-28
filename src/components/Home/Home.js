import getHeader from '../Header/Header';
import getHero from '../Hero/Hero';
import getForcast from '../Forcast/Forcast';

export default function (todayWeather, forcastWeather, cityImage) {
  const container = document.createElement('div');

  container.className = 'container';
  container.style.backgroundImage = `url(${cityImage})`;

  const header = getHeader();
  const heroSection = getHero(todayWeather);
  const forcastSection = getForcast(forcastWeather);

  container.appendChild(header);
  container.appendChild(heroSection);
  container.appendChild(forcastSection);
  document.body.appendChild(container);
}