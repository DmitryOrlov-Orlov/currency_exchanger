import { v4 as uuidv4 } from 'uuid';
import state from '../store';
import {
  ADD_POSITION,
  DEL_POSITION,
  CHANGE_CURRENCY_FIRST,
  CHANGE_CURRENCY_SECOND,
  CHANGE_CURRENCY_COURSE,
  TOTAL_CURRENCY_FIRST_AND_SECOND,
  CARD_PERSPECTIVE
} from '../constants';

export const changeAddPosition = () => {
  console.log(uuidv4());
  let cards = state.getState().cards;
  const itemCard = {
    id: uuidv4(),
    currencyFirst: '',
    currencySecond: '',
    currencyCourse: ''
  }
  cards.push(itemCard);
  const newCards = cards;
  console.log(newCards);
  return {
    type: ADD_POSITION,
    payload: newCards
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
export const changeTotalCurrencyFirstAndSecond = () => {
  const cards = state.getState().cards;
  let newTotalCurrencyFirst = 0;
  let newTotalCurrencySecond = 0;
  cards.forEach((item) => {
    if (item.currencyCourse === '') {
      return false;
    }
    if (item.currencySecond !== '') {
      newTotalCurrencyFirst = Number(newTotalCurrencyFirst) + Number(item.currencyFirst);
    }
    if (item.currencyFirst !== '') {
      newTotalCurrencySecond = Number(newTotalCurrencySecond) + Number(item.currencySecond);
    }
  })
  newTotalCurrencyFirst = newTotalCurrencyFirst.toFixed(2);
  newTotalCurrencySecond = newTotalCurrencySecond.toFixed(2);

  return {
    type: TOTAL_CURRENCY_FIRST_AND_SECOND,
    totalCurrencyFirst: newTotalCurrencyFirst,
    totalCurrencySecond: newTotalCurrencySecond
  }
}

export const changeCardPerspective = () => {
  //в процессе
  const cards = state.getState().cards;
  console.log(cards);

  return {
    type: CARD_PERSPECTIVE,
    payload: '123'
  }
}