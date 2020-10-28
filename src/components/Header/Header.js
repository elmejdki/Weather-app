export default function Header() {
  const header = document.createElement('header');

  const unitsSwitcher = document.createElement('div');
  const celisuesBtn = document.createElement('button');
  const farenhietBtn = document.createElement('button');

  const searchField = document.createElement('div');
  const loader = document.createElement('div');
  const fieldGroup = document.createElement('div');
  const searchIcon = document.createElement('i');
  const form = document.createElement('form');
  const countryInput = document.createElement('input');
  const error = document.createElement('div');

  unitsSwitcher.className = 'temprature-units';
  celisuesBtn.className = 'selected';
  searchField.className = 'search-field';
  loader.className = 'loader';
  fieldGroup.className = 'field-group';
  searchIcon.className = 'search-icon';
  error.className = 'error';

  countryInput.id = 'country';
  countryInput.setAttribute('placeholder', 'Country Name');
  countryInput.name = 'country';
  countryInput.type = 'text';

  celisuesBtn.textContent = '°C';
  farenhietBtn.textContent = '°F';
  error.textContent = 'City not found!';

  unitsSwitcher.appendChild(celisuesBtn);
  unitsSwitcher.appendChild(farenhietBtn);
  header.appendChild(unitsSwitcher);

  searchField.appendChild(loader);
  fieldGroup.appendChild(searchIcon);
  fieldGroup.appendChild(countryInput);
  fieldGroup.appendChild(error);
  form.appendChild(fieldGroup);
  searchField.appendChild(form);
  header.appendChild(searchField);

  return header;
}