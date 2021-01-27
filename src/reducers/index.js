import uuid from 'react-uuid';
import {
  CHANGE_CURRENCY_FIRST, CHANGE_CURRENCY_SECOND, CHANGE_CURRENCY_COURSE,
  ADD_POSITION, DEL_POSITION, TOTAL_CURRENCY_FIRST_AND_SECOND, CARD_PERSPECTIVE
} from '../constants';

const initialState = {
  cards: [
    {
      id: uuid(),
      currencyFirst: '',
      currencySecond: '',
      currencyCourse: ''
    }],
  totalCurrencyFirst: 0,
  totalCurrencySecond: 0,
  cardPerspective: {
    perspectiveCurrencyFirst: 4,
    perspectiveCurrencySecond: 5,
    perspectiveCurrencyCours: 6,
    difference: 7
  },
  test: 0
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION:
      return { ...state, cards: action.payload, test: action.payload + 1/* плохо надо исправлять */ }
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