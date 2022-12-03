import Notiflix from 'notiflix';
Notiflix.Notify.init({});
import { refs } from './index';

const URL = 'https://restcountries.com/v3.1/name/';
let items = [];

export function fetchCountries(country) {
  fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  )
    .then(r => r.json())
    .then(data => {
      items = data;
      if (items.status === 404) {
        throw error;
      }
      if (data.length > 10) {
        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 || data.length < 10) {
        renderList();
      }
      if (data.length === 1) {
        renderInfo();
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function template({ name, flags }) {
  return `<li><img src=${flags.svg} alt = "flag" width = "100">
  <span class="country_name" >${name.official}</span>
  </li>`;
}

function templateCountryInfo({ capital, population, languages }) {
  return `<p>Capital: ${capital}</p>
  <p>Population: ${population}</p>
  <p>Languages: ${Object.values(languages)}</p>`;
}

function renderList() {
  const list = items.map(template);
  refs.countryList.innerHTML = '';
  refs.countryList.insertAdjacentHTML('beforeend', list.join(''));
}

function renderInfo() {
  const info = items.map(templateCountryInfo);
  refs.countryInfo.innerHTML = '';
  refs.countryInfo.insertAdjacentHTML('beforeend', info.join(''));
}
