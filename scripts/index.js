import {shopFavicon} from './favsmap.js';

// local:
// const jsonFile = '../data/wishlist.json';

// pages:
const jsonFile = '/wishlist/data/wishlist.json';

const getTemplateById = (id) => {
  const template = document.querySelector(`#${id}`);
  if (template === null) {
    return template;
  }
  const fragment = template.content;
  return fragment.firstElementChild;
};

const checkPriceRange = (value) => {
  switch (true) {
    case value >= 3500:
      return 'card--5k';
    case value >= 1500:
      return 'card--2k';
    case value >= 750:
      return 'card--1k';
    case value >= 350:
      return 'card--500';
    case value >= 150:
      return 'card--200';
    case value < 150:
      return 'card--100';
  }
};

const wishlist = document.body.querySelector('.list');
const wishlistFragment = document.createDocumentFragment();
const cardTemplate = getTemplateById('card');

const fillOutCard = (jsonArray) => {
  if (cardTemplate) {
    for (const {link, image, title, description, price} of jsonArray) {
      const cardClone = cardTemplate.cloneNode(true);

      const url = new URL(link.primary.href);
      const domain = url.hostname.split('.').at(-2);

      cardClone.querySelector('.seller__icon')
        .src = link.primary.src || shopFavicon[domain].src;
      cardClone.querySelector('.seller__icon')
        .alt = link.primary.alt || shopFavicon[domain].alt;

      cardClone.querySelector('.card__image').src = image.src;
      cardClone.querySelector('.card__image').alt = image.alt;
      if (image.crop) {
        cardClone.querySelector('.card__image')
          .classList.add(`image--${image.crop}`);
      }

      cardClone.querySelector('.card__title > a').textContent = title;
      cardClone.querySelector('.card__description').textContent = description;
      cardClone.querySelector('.card__price > data').value = price;
      cardClone.querySelector('.card__price > data')
        .textContent = new Intl.NumberFormat('ru-RU').format(price);

      cardClone.querySelector('.card')
        .classList.add(checkPriceRange(price));

      wishlistFragment.append(cardClone);
    }
    wishlist.append(wishlistFragment);
  }
};

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => fillOutCard(data));
