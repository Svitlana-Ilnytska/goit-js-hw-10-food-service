import cardList from '../templates/list_cards.hbs';
import menu from '../menu.json';

const menuMarkup = cardList(menu);
const refs = {
  cards: document.querySelector('#menu'),
};

refs.cards.innerHTML = menuMarkup;
