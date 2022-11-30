import './css/styles.css';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', onInput);

function onInput(e) {
  let country = e.currentTarget.value;
  fetchCountries();
}
