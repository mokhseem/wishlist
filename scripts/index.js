const jsonFile = '/wishlist/data/wishlist.json';

// const response = await fetch(jsonFile);
// const data = await response.json();

// fetch(jsonFile)
//   .then((response) => response.json())
//   .then((data) => fillOutCard(data));

const xhr = new XMLHttpRequest();
xhr.open('GET', jsonFile);
xhr.responseType = 'json';
xhr.onload = () => {
  const data = xhr.response;
  fillOutCard(data);
};
xhr.send();

const card = document.body.querySelector('.card');
const seller = card.querySelector('.seller__icon');
const image = card.querySelector('.card__image');
const title = card.querySelector('.card__title');
const description = card.querySelector('.card__description');
const price = card.querySelector('.card__price > data');

function fillOutCard(jsonObj) {
  seller.src = jsonObj['seller'];
  image.src = jsonObj['image'];
  title.textContent = jsonObj['title'];
  description.textContent = jsonObj['description'];
  price.value = jsonObj['price'];
  price.textContent = new Intl.NumberFormat('ru-RU').format(price.value);
}
