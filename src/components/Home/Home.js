import getHeader from '../Header/Header';

export default function (todayWeather, cityImage) {
  const container = document.createElement('div');

  container.className = 'container';
  container.style.backgroundImage = `url(${cityImage})`;

  const header = getHeader();

  container.appendChild(header);
  document.body.appendChild(container);
}