import { v4 as uuidv4 } from 'uuid';
import state from '../store';
import {
  ADD_POSITION,
  DEL_POSITION,
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
  CARD_PERSPECTIVE,
  NAME_CURRENCY_FIRST,
  NAME_CURRENCY_SECOND,
  CREATE_CARD,
  DELETE_CARD,
  ACTIVE_PAGE_ID,
  TOTAL_CURRENCY
} from '../constants';

export const changeAddPosition = () => {
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
export const changeDelPosition = ({ id }) => {
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
      totalCurrencyFirst = (Number(totalCurrencyFirst) + Number(item.currencyFirst)).toFixed(2);
      totalCurrencySecond = (Number(totalCurrencySecond) + Number(item.currencySecond)).toFixed(2);
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
    nameFirst: value
  }
}
export const changeNameCurrencySecond = (value) => {

  return {
    type: NAME_CURRENCY_SECOND,
    nameSecond: value
  }
}
export const changeCreateCard = (nameFirst, nameSecond) => {
  const id = uuidv4();
  const newCard = {
    id: id,
    pagesNameFirst: nameFirst,
    pagesNameSecond: nameSecond,
    totalCurrencyFirst: 0,
    totalCurrencySecond: 0
  }

  return {
    type: CREATE_CARD,
    payload: newCard,
    activePageId: id,
  }
}
export const changeDeleteCard = ({ id }) => {
  const pages = state.getState().pages;
  const newPages = pages.filter((item) => item.id !== id);

  return {
    type: DELETE_CARD,
    payload: newPages
  }
}
export const changeActivePageId = ({ id }) => {

  return {
    type: ACTIVE_PAGE_ID,
    payload: id,
  }
}
export const changeCardPerspective = () => {
  //в процессе

  return {
    type: CARD_PERSPECTIVE,
    payload: '123'
  }
}