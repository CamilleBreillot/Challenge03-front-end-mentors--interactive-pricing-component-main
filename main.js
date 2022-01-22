//select elements
input = document.querySelector('input');
slider = document.querySelector('.slider');
price = document.querySelector('.price-item');
number = document.querySelector('.number');
toggle = document.querySelector('#toggle');
month = document.querySelector('#month');

const pageviewsArray = ["10K", "50K", "100K", "500K", "1M"];
const priceArrayMonthly = [8, 12, 16, 24, 36];

//write function
handleChangePrice = (e) => {

  const value = e.currentTarget.value;
  let percent = (value / 4) * 100;
  slider.style.background = `linear-gradient(to right, var(--clr-full-slider) ${percent}%, var(--clr-empty-slider) ${percent}%)`;
  if (toggle.checked === false) {
  number.innerHTML = pageviewsArray[value];
  price.innerHTML = priceArrayMonthly[value];
  } else {
    number.innerHTML = pageviewsArray[value];
    price.innerHTML = (priceArrayMonthly[value] * 12) * 0.75;
  }
}

handleChangeDiscount = (e) => {
  if (e.currentTarget.checked === true) {
    price.innerHTML = (parseInt(priceArrayMonthly[input.value]) * 12) * 0.75;
    month.innerHTML = "/year";
  } else {
    price.innerHTML = priceArrayMonthly[input.value];
    month.innerHTML = "/month";
  }
}

//add event listeners
input.addEventListener('change', handleChangePrice);
input.addEventListener('mousemove', handleChangePrice);
toggle.addEventListener('change', handleChangeDiscount);
