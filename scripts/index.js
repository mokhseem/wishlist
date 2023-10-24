import {shopFavicon} from './favsmap.js';

// local:
// const jsonFile = '../data/wishlist.json';

// pages:
const jsonFile = '/wishlist/data/wishlist.json';

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

  if (cardTemplate) {
    for (const {link, image, title, description, price} of jsonArray) {
      const cardClone = cardTemplate.cloneNode(true);
      const cardImage = cardClone.querySelector('.card__image');
      const cardPrice = cardClone.querySelector('.card__price > data');

      if (sellerTemplate) {
        const seller = cardClone.querySelector('.seller');
        const sellerBox = document.createDocumentFragment();

        for (const priorityLink of Object.keys(link)) {
          const sellerClone = sellerTemplate.cloneNode(true);
          const sellerIcon = sellerClone.querySelector('.seller__icon');

          const url = new URL(link[priorityLink].href);
          const domain = url.hostname.split('.').at(-2);

          if (priorityLink) {
            sellerClone.href = link[priorityLink].href;
            // sellerClone.classList.add(`link--${priorityLink}`);
            sellerIcon.src = link[priorityLink].icon || shopFavicon[domain].icon;
            sellerIcon.alt = link[priorityLink].name || shopFavicon[domain].name;
          }

          sellerBox.append(sellerClone);
        }
        seller.append(sellerBox);
      }

      cardImage.src = image.src;
      cardImage.alt = image.alt;
      if (image.crop) {
        cardImage.classList.add(`image--${image.crop}`);
      }

      cardClone.querySelector('.card__link').href = link.primary.href;
      cardClone.querySelector('.card__title > a').textContent = title;
      cardClone.querySelector('.card__description').textContent = description;

      cardPrice.value = price;
      cardPrice.textContent = new Intl.NumberFormat('ru-RU').format(price);

      cardClone.querySelector('.card').classList.add(checkPriceRange(price));

      cardBox.append(cardClone);
    }
    wishlist.append(cardBox);
  }
};

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => createCardCollection(data));
