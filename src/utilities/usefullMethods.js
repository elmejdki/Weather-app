function getUnit() {
  const unit = localStorage.getItem('unit');
  if (unit && unit === 'F') {
    return 'F';
  }

  localStorage.setItem('unit', 'C');
  return 'C';
}

function celciusToFarenheit(degree) {
  return Math.round((degree * (9 / 5) + 32) * 100) / 100;
}

function farenheitToCelcius(degree) {
  return Math.round((5 * ((degree - 32) / 9)) * 100) / 100;
}

export { getUnit, celciusToFarenheit, farenheitToCelcius };