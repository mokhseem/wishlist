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

const wishlist = document.body.querySelector('.list');
const wishlistFragment = document.createDocumentFragment();
const cardTemplate = getTemplateById('card');

const fillOutCard = (jsonArray) => {
  if (cardTemplate) {
    for (const {seller, image, title, description, price} of jsonArray) {
      const cardClone = cardTemplate.cloneNode(true);

      cardClone.querySelector('.seller__icon').src = seller['icon'];
      cardClone.querySelector('.seller__icon').alt = seller['name'];
      cardClone.querySelector('.card__image').src = image['src'];
      cardClone.querySelector('.card__image').alt = image['alt'];
      cardClone.querySelector('.card__title > a').textContent = title;
      cardClone.querySelector('.card__description').textContent = description;
      cardClone.querySelector('.card__price > data').value = price;
      cardClone.querySelector('.card__price > data')
        .textContent = new Intl.NumberFormat('ru-RU').format(price);

      wishlistFragment.append(cardClone);
    }
    wishlist.append(wishlistFragment);
  }
};

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => fillOutCard(data));
