import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import state from '../store';
import {
  ADD_POSITION,
  DEL_POSITION,
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
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

export const addPosition = () => {
  const activePageId = state.getState().activePageId;
  const pages = state.getState().pages;
  let cardsNameFirst = '';
  let cardsNameSecond = '';
  pages.forEach(item => {
    if (item.id === activePageId) {
      cardsNameFirst = item.pagesNameFirst;
      cardsNameSecond = item.pagesNameSecond;
    }
  })
  const itemCard = {
    id: uuidv4(),
    currencyFirst: '',
    currencySecond: '',
    currencyCourse: '',
    pageId: activePageId,
    cardsNameFirst: cardsNameFirst,
    cardsNameSecond: cardsNameSecond
  }

  return {
    type: ADD_POSITION,
    payload: itemCard
  }
}
export const deletePosition = ({ id }) => {
  const cards = state.getState().cards;
  const idBtnDel = id;
  const newCards = cards.filter((item) => item.id !== idBtnDel);

  return {
    type: DEL_POSITION,
    payload: newCards
  }
}
export const changeCurrencyFirst = (currencyFirst) => {
  const cards = state.getState().cards;
  const newCards = cards.map(item => {
    if (item.id === currencyFirst.id && item.currencyCourse === '') {
      item.currencyFirst = currencyFirst.value;
    }
    if (item.id === currencyFirst.id && item.currencyCourse !== '') {
      item.currencyFirst = currencyFirst.value;
      item.currencySecond = (item.currencyFirst / item.currencyCourse).toFixed(2);
    }
    return item;
  })

  return {
    type: CHANGE_CURRENCY_FIRST,
    payload: newCards
  }
}
export const changeCurrencyCourse = (currencyCourse) => {
  const cards = state.getState().cards;
  const newCards = cards.map(item => {
    if (item.id === currencyCourse.id && item.currencyFirst === '') {
      item.currencyCourse = currencyCourse.value;
    }
    if (item.id === currencyCourse.id) {
      item.currencyCourse = currencyCourse.value;
      item.currencySecond = (item.currencyFirst / item.currencyCourse).toFixed(2);
    }
    return item;
  })

  return {
    type: CHANGE_CURRENCY_COURSE,
    payload: newCards
  }
}
export const changeCurrencySecond = (currencySecond) => {
  const cards = state.getState().cards;
  const newCards = cards.map(item => {
    if (item.id === currencySecond.id && item.currencyCourse === '') {
      item.currencySecond = currencySecond.value;
    }
    if (item.id === currencySecond.id && item.currencyCourse !== '') {
      item.currencySecond = currencySecond.value;
      item.currencyFirst = (item.currencySecond * item.currencyCourse).toFixed(2);
    }
    return item;
  })

  return {
    type: CHANGE_CURRENCY_SECOND,
    payload: newCards
  }
}
export const changeTotalCurrency = () => {
  const pages = state.getState().pages;
  const activePageId = state.getState().activePageId;
  const cards = state.getState().cards;
  let totalCurrencyFirst = '';
  let totalCurrencySecond = '';
  cards.map(item => {
    if (item.pageId === activePageId) {
      totalCurrencyFirst = Number(totalCurrencyFirst) + Number(item.currencyFirst);
      totalCurrencySecond = Number(totalCurrencySecond) + Number(item.currencySecond);
    }
    return true;
  })
  const newPages = pages.map(item => {
    if (item.id === activePageId) {
      item.totalCurrencyFirst = totalCurrencyFirst;
      item.totalCurrencySecond = totalCurrencySecond;
    }
    return item;
  })

  return {
    type: TOTAL_CURRENCY,
    payload: newPages
  }
}
export const changeNameCurrencyFirst = (value) => {

  return {
    type: NAME_CURRENCY_FIRST,
    payload: value
  }
}
export const changeNameCurrencySecond = (value) => {

  return {
    type: NAME_CURRENCY_SECOND,
    payload: value
  }
}
export const createCard = (nameFirst, nameSecond, rateFirst, rateSecond) => {
  const id = uuidv4();
  const newCard = {
    id: id,
    pagesNameFirst: nameFirst,
    pagesNameSecond: nameSecond,
    totalCurrencyFirst: 0,
    totalCurrencySecond: 0,
    rateFirst: rateFirst,
    rateSecond: rateSecond,
    apiCours: 0,
    perspectiveCurrencyFirst: 0,
    perspectiveCurrencySecond: 0,
    margin: 0
  }
  const itemCard = {
    id: uuidv4(),
    currencyFirst: '',
    currencySecond: '',
    currencyCourse: '',
    pageId: id,
    cardsNameFirst: nameFirst,
    cardsNameSecond: nameSecond
  }

  return {
    type: CREATE_CARD,
    payload: newCard,
    activePageId: id,
    cards: itemCard
  }
}
export const deleteCard = (id) => {
  const pages = state.getState().pages;
  const newPages = pages.filter((item) => item.id !== id);

  return {
    type: DELETE_CARD,
    payload: newPages
  }
}
export const changeActivePageId = (id) => {

  return {
    type: ACTIVE_PAGE_ID,
    payload: id,
  }
}
export const changeRateFirst = (value) => {

  return {
    type: RATE_FIRST,
    payload: value
  }
}
export const changeRateSecond = (value) => {

  return {
    type: RATE_SECOND,
    payload: value
  }
}
export const changeResultOfPerspective = () => dispatch => {
  const activePageId = state.getState().activePageId;
  const rateFirst = state.getState().rateFirst;
  const rateSecond = state.getState().rateSecond;
  const pages = state.getState().pages;
  axios.get(`https://api.exchangeratesapi.io/latest?base=${rateSecond}`, {})
    .then(res => {
      let apiCours = res.data.rates[rateFirst];
      const newCard = pages.map(item => {
        if (item.id === activePageId) {
          item.apiCours = (apiCours).toFixed(2);
          item.perspectiveCurrencySecond = (item.totalCurrencySecond).toFixed(2);
          item.perspectiveCurrencyFirst = (apiCours * item.totalCurrencySecond).toFixed(2);
          item.margin = (apiCours * item.totalCurrencySecond) - item.totalCurrencyFirst;
        }
        return item;
      })
      dispatch({
        type: RESULT_OF_PERSPECTIVE,
        payload: newCard
      });
    })
}
export const changeResultFirst = (value) => {
  const pages = state.getState().pages;
  const activePageId = state.getState().activePageId;
  const newPages = pages.map(item => {
    if (item.id === activePageId) {
      item.perspectiveCurrencyFirst = value;
      item.perspectiveCurrencySecond = value / item.apiCours;
      item.margin = value - item.totalCurrencyFirst;
    }
    return item;
  })
  return {
    type: CHANGE_RESULT_FIRST,
    payload: newPages
  }
}
export const changeResultSecond = (value) => {
  const pages = state.getState().pages;
  const activePageId = state.getState().activePageId;
  const newPages = pages.map(item => {
    if (item.id === activePageId) {
      item.perspectiveCurrencySecond = value;
      item.perspectiveCurrencyFirst = value * item.apiCours;
      item.margin = item.perspectiveCurrencyFirst - item.totalCurrencyFirst;
    }
    return item;
  })

  return {
    type: CHANGE_RESULT_SECOND,
    payload: newPages
  }
}
export const changeResultCours = (value) => {
  const pages = state.getState().pages;
  const activePageId = state.getState().activePageId;
  const newPages = pages.map(item => {
    if (item.id === activePageId) {
      item.apiCours = value;
      item.perspectiveCurrencyFirst = value * item.perspectiveCurrencySecond;
      item.margin = item.perspectiveCurrencyFirst - item.totalCurrencyFirst;
    }
    return item;
  })

  return {
    type: CHANGE_RESULT_COURS,
    payload: newPages
  }
}