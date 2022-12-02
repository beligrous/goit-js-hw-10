import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
Notiflix.Notify.init({});

const DEBOUNCE_DELAY = 300;
const URL = 'https://restcountries.com/v3.1/name/';
let items = [];

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', onInput);

function onInput(e) {
  let country = e.currentTarget.value;

  fetchCountries;
}

function template(name, flags) {
  return `<li><svg>
  <use href=${flags.svg}></use>
</svg>
  <span>${name.official}</span>
  </li>`;
}

function render() {
  const list = items.map(template);
  refs.countryList.innerHTML = '';
  refs.countryList.insertAdjacentHTML('beforeend', list.join(''));
}
