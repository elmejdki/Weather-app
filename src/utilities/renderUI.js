import { celciusToFarenheit, farenheitToCelcius } from './usefullMethods';

export default function () {
  const farenheitBtn = document.querySelector('.temprature-units button:last-child');
  const celciusBtn = document.querySelector('.temprature-units button:first-child');
  const tempatureContainers = document.querySelectorAll('.tempature span');

  function switchClassInBtn() {
    farenheitBtn.classList.toggle('selected');
    celciusBtn.classList.toggle('selected');
  }

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
