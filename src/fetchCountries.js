export const fetchCountries = country => {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name.official,capital,population,flags.svg,languages`
  ).then(r => r.json);
};
