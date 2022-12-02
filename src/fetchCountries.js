export function fetchCountries(country) {
  fetch(`${URL}${country}?fields=name,capital,population,flags,languages`)
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
