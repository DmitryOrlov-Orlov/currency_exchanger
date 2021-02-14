/* import { v4 as uuidv4 } from 'uuid'; */
import currencyItem from '../json/currencyItem.json';
import {
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
  ADD_POSITION, DEL_POSITION,
  CARD_PERSPECTIVE,
  NAME_CURRENCY_FIRST,
  NAME_CURRENCY_SECOND,
  CREATE_CARD,
  DELETE_CARD,
  ACTIVE_PAGE_ID,
  TOTAL_CURRENCY
} from '../constants';

const initialState = {
  cards: [
    /* {
      id: uuidv4(),
      currencyFirst: '',
      currencySecond: '',
      currencyCourse: '',
      pageId: 1,
      cardsNameFirst: '',
      cardsNameSecond: ''
    }, */
  ],
  pages: [/* {
    id: uuidv4(),
    pagesNameFirst: 'Российский рубль-test',
    pagesNameSecond: 'Доллар США-test',
    totalCurrencyFirst:0,
    totalCurrencySecond: 0
  } */
  ],
  activePageId: null,
  nameFirst: currencyItem[0].value,
  nameSecond: currencyItem[1].value,
  cardPerspective: {
    perspectiveCurrencyFirst: 4,
    perspectiveCurrencySecond: 5,
    perspectiveCurrencyCours: 6,
    difference: 7
  }
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION:
      return { ...state, cards: [...state.cards, action.payload] }
    case DEL_POSITION:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_FIRST:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_COURSE:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_SECOND:
      return { ...state, cards: action.payload };
    case NAME_CURRENCY_FIRST:
      return { ...state, nameFirst: action.nameFirst }
    case NAME_CURRENCY_SECOND:
      return { ...state, nameSecond: action.nameSecond }
    case CREATE_CARD:
      return {
        ...state,
        pages: [...state.pages, action.payload],
        activePageId: action.activePageId
      }
    case DELETE_CARD:
      return { ...state, pages: action.payload }
    case ACTIVE_PAGE_ID:
      return { ...state, activePageId: action.payload }
    case TOTAL_CURRENCY:
      return { ...state, pages: action.payload }
    case CARD_PERSPECTIVE:
      return { ...state, cardPerspective: action.payload }
    default:
      return state;
  }
}