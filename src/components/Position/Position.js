import React from 'react';
import { connect } from 'react-redux';
import BtnDeletePosition from '../BtnDeletePosition/BtnDeletePosition';
import InputCurrency from '../InputСurrency/InputCurrency';
import {
  changeCurrencyFirst,
  changeCurrencyCourse,
  changeCurrencySecond,
} from '../../actions';
import css from './Position.module.css';

const Position = ({
  id,
  changeCurrencyFirst,
  changeCurrencyCourse,
  changeCurrencySecond,
  currencyFirst,
  currencySecond,
  currencyCourse,
  cardsNameFirst,
  cardsNameSecond }) => {
  const onChangeHeandler = ({ target }) => {
    if (target.dataset.idInput === '1') {
      changeCurrencyFirst(target);
    } else if (target.dataset.idInput === '2') {
      changeCurrencyCourse(target);
    } else if (target.dataset.idInput === '3') {
      changeCurrencySecond(target);
    }
  }

  const InputCurrencyItems = [
    {
      id: id,
      id_input: 1,
      placeholder: '0',
      className: 'currency__first',
      value: currencyFirst,
      onChange: onChangeHeandler
    },
    {
      id: id,
      id_input: 2,
      placeholder: '0',
      className: 'cours',
      value: currencyCourse,
      onChange: onChangeHeandler
    },
    {
      id: id,
      id_input: 3,
      placeholder: '0',
      className: 'currency__second',
      value: currencySecond,
      onChange: onChangeHeandler
    },
  ];

  return (
    <div className={css.position}>
      <div className={css.position__titles}>
        <p>{cardsNameFirst}</p>
        <p>Курс</p>
        <p>{cardsNameSecond}</p>
        {InputCurrencyItems.map(item => (<InputCurrency
          id={id}
          dataIdInput={item.id_input}
          key={item.id_input}
          placeholder={item.placeholder}
          className={item.className}
          value={item.value}
          onChange={item.onChange}
        />)
        )}
      </div>
      <BtnDeletePosition id={id} />
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrencyFirst: (value) => dispatch(changeCurrencyFirst(value)),
  changeCurrencyCourse: (value) => dispatch(changeCurrencyCourse(value)),
  changeCurrencySecond: (value) => dispatch(changeCurrencySecond(value)),
})

export default connect(null, mapDispatchToProps)(Position);
