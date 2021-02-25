import currencyItem from '../json/currencyItem.json';
import {
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
  ADD_POSITION, DEL_POSITION,
  NAME_CURRENCY_FIRST,
  NAME_CURRENCY_SECOND,
  CREATE_CARD,
  DELETE_CARD,
  ACTIVE_PAGE_ID,
  TOTAL_CURRENCY,
  RATE_FIRST,
  RATE_SECOND,
  RESULT_OF_PERSPECTIVE,
  CHANGE_RESULT_FIRST,
  CHANGE_RESULT_SECOND,
  CHANGE_RESULT_COURS
} from '../constants';

const initialState = {
  cards: [],
  pages: [],
  activePageId: null,
  nameFirst: currencyItem[0].value,
  nameSecond: currencyItem[1].value,
  rateFirst: currencyItem[0].rate,
  rateSecond: currencyItem[1].rate
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION:
      return { ...state, cards: [...state.cards, action.payload] };
    case DEL_POSITION:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_FIRST:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_COURSE:
      return { ...state, cards: action.payload };
    case CHANGE_CURRENCY_SECOND:
      return { ...state, cards: action.payload };
    case NAME_CURRENCY_FIRST:
      return { ...state, nameFirst: action.payload };
    case NAME_CURRENCY_SECOND:
      return { ...state, nameSecond: action.payload };
    case CREATE_CARD:
      return {
        ...state,
        pages: [...state.pages, action.payload],
        activePageId: action.activePageId,
        cards: [...state.cards, action.cards]
      };
    case DELETE_CARD:
      return { ...state, pages: action.payload };
    case ACTIVE_PAGE_ID:
      return { ...state, activePageId: action.payload };
    case TOTAL_CURRENCY:
      return { ...state, pages: action.payload };
    case RATE_FIRST:
      return { ...state, rateFirst: action.payload };
    case RATE_SECOND:
      return { ...state, rateSecond: action.payload };
    case RESULT_OF_PERSPECTIVE:
      return { ...state, pages: action.payload }
    case CHANGE_RESULT_FIRST:
      return { ...state, pages: action.payload }
    case CHANGE_RESULT_SECOND:
      return { ...state, pages: action.payload }
    case CHANGE_RESULT_COURS:
      return { ...state, pages: action.payload }
    default:
      return state;
  }
}