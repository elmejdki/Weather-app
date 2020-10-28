export default function (forcastData) {
  const extrasInfo = document.createElement('div');

  let dayDetails;
  let day;
  let time;
  let weatherLogo;
  let weatherStatus;
  let tempContainer;
  let min;
  let max;

  extrasInfo.className = 'extras-weather-info';

  function getDay(date) {
    const today = new Date();

    if (date.getDate() === today.getDate()) {
      return 'Today';
    }

    if (date.getDate() === today.getDate() + 1) {
      return 'Tomorrow';
    }

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  let today;

  forcastData.list.forEach((forcast) => {
    dayDetails = document.createElement('div');
    day = document.createElement('div');
    time = document.createElement('div');
    weatherLogo = document.createElement('div');
    weatherStatus = document.createElement('div');
    tempContainer = document.createElement('div');
    min = document.createElement('span');
    max = document.createElement('span');

    extrasInfo.className = 'extras-weather-info';

    dayDetails.className = 'day-details';
    day.className = 'day';
    time.className = 'time';
    weatherStatus.className = 'weather-status';
    tempContainer.className = 'temp';
    min.className = 'min';
    max.className = 'max';

    today = new Date(forcast.dt * 1000 - forcastData.city.timezone * 1000);
    day.textContent = getDay(today);

    time.textContent = `${today.getHours()}:00`;
    weatherLogo.className = `weather-logo ${forcast.weather[0].main.toLowerCase()}`;
    min.textContent = `${forcast.main.temp_min}°`;
    max.textContent = `${forcast.main.temp_max}°`;

    dayDetails.appendChild(day);
    dayDetails.appendChild(time);
    dayDetails.appendChild(weatherLogo);
    dayDetails.appendChild(weatherStatus);

    tempContainer.appendChild(min);
    tempContainer.innerHTML += ' / ';
    tempContainer.appendChild(max);
    dayDetails.appendChild(tempContainer);
    extrasInfo.appendChild(dayDetails);
  });

  return extrasInfo;
}