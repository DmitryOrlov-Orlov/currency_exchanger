import { v4 as uuidv4 } from 'uuid';
import {
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
  ADD_POSITION, DEL_POSITION,
  TOTAL_CURRENCY_FIRST_AND_SECOND,
  CARD_PERSPECTIVE
} from '../constants';

const initialState = {
  cards: [
    {
      id: uuidv4(),
      currencyFirst: '',
      currencySecond: '',
      currencyCourse: '',
      pageId: 1
    },
  ],
  pages: [{
    id: 1,
  }],
  totalCurrencyFirst: 0,
  totalCurrencySecond: 0,
  cardPerspective: {
    perspectiveCurrencyFirst: 4,
    perspectiveCurrencySecond: 5,
    perspectiveCurrencyCours: 6,
    difference: 7
  }/* ,
  test: 0 */
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION:
      return { ...state, cards: action.payload /* [...state.cards, action.payload] */ }
    case DEL_POSITION:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_FIRST:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_COURSE:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_SECOND:
      return { ...state, cards: action.payload };
    case TOTAL_CURRENCY_FIRST_AND_SECOND:
      return {
        ...state, totalCurrencyFirst: action.totalCurrencyFirst,
        totalCurrencySecond: action.totalCurrencySecond
      }
    case CARD_PERSPECTIVE:
      return { ...state, cardPerspective: action.payload }
    default:
      return state;
  }
}