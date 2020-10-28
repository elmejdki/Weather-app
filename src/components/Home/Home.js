import getHeader from '../Header/Header';
import getHero from '../Hero/Hero';

export default function (todayWeather, forcastWeather, cityImage) {
  const container = document.createElement('div');

  container.className = 'container';
  container.style.backgroundImage = `url(${cityImage})`;

  const header = getHeader();
  const heroSection = getHero(todayWeather);

  container.appendChild(header);
  container.appendChild(heroSection);
  document.body.appendChild(container);
}