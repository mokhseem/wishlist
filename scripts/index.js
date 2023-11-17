import { shopFavicon } from './favsmap.js';

// const JSON = '../data/list.json';
const JSON = '/wishlist/data/list.json';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getTemplateById = (id) => {
  const template = document.getElementById(id);
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
const cardTemplate = getTemplateById('card');
const sellerTemplate = getTemplateById('seller');

const createCardCollection = (jsonArray) => {
  const cardBox = document.createDocumentFragment();
  jsonArray = shuffleArray(jsonArray).sort((wish) => wish.done ? 1 : -1);

  if (cardTemplate) {
    for (const {link, image, title, description, price, done} of jsonArray) {
      const cardClone = cardTemplate.cloneNode(true);
      const cardImageClone = cardClone.querySelector('.card__image');
      const cardPriceTagClone = cardClone.querySelector('.card__price > data');

      if (done) {
        cardClone.classList.add('list__item--is-disabled');
      }

      if (sellerTemplate) {
        const seller = cardClone.querySelector('.seller');
        const sellerBox = document.createDocumentFragment();

        for (const priorityLink of Object.keys(link)) {
          const sellerClone = sellerTemplate.cloneNode(true);
          const sellerIconClone = sellerClone.querySelector('.seller__icon');

          const url = new URL(link[priorityLink].href);
          // const domain = url.hostname.split('.').at(-2);
          const hostname = url.hostname.split('.');
          const domain = hostname[hostname.length - 2];

          if (priorityLink) {
            sellerClone.href = link[priorityLink].href;
            // sellerClone.classList.add(`link--${priorityLink}`);
            sellerIconClone.src = link[priorityLink].icon || shopFavicon[domain].icon;
            sellerIconClone.alt = link[priorityLink].name || shopFavicon[domain].name;
          }

          sellerBox.append(sellerClone);
        }
        seller.append(sellerBox);
      }

      cardImageClone.src = image.src;
      cardImageClone.alt = image.alt;

      if (image.crop) {
        cardImageClone.classList.add(`image--${image.crop}`);
      }

      cardClone.querySelector('.card__link').href = link.primary.href;
      cardClone.querySelector('.card__title > a').textContent = title;
      cardClone.querySelector('.card__description').textContent = description;

      cardPriceTagClone.value = price;
      cardPriceTagClone.textContent = new Intl.NumberFormat('ru-RU').format(price);
      cardClone.querySelector('.card').classList.add(checkPriceRange(price));

      cardBox.append(cardClone);
    }
    wishlist.append(cardBox);
  }
};

fetch(JSON)
  .then((response) => response.json())
  .then((data) => createCardCollection(data));
