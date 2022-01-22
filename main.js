//select elements
input = document.querySelector('input');
slider = document.querySelector('.slider');
price = document.querySelector('.price');
number = document.querySelector('.number');

const pageviewsArray = ["10K", "50K", "100K", "500K", "1M"];
const priceArrayMonthly = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];




//write function
handleChange = (e) => {
  const value = e.currentTarget.value;
  let percent = (value / 4) * 100;
  slider.style.background = `linear-gradient(to right, var(--clr-full-slider) ${percent}%, var(--clr-empty-slider) ${percent}%)`;
  number.innerHTML = pageviewsArray[value];
  price.innerHTML = priceArrayMonthly[value];
}
//add event listeners
input.addEventListener('change', handleChange);
