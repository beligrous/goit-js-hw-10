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
      console.log(items);
      render();
      //   if (data.length > 10) {
      //     return Notiflix.Notify.info(
      //       'Too many matches found. Please enter a more specific name.'
      //     );
      //   }
      //   if (data.length > 2 || data.length < 10) {
      //     render();
      //   }
    });
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
