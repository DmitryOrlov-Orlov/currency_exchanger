import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputCurrency from '../InputСurrency/InputCurrency';
import BtnRestore from '../BtnRestore/BtnRestore';
import css from './Perspective.module.css';

const Perspective = () => {
  const [currencyFirst, setCurrencyFirst] = useState('');
  const [cours, setCours] = useState('');
  const [currencySecond, setCurrencySecond] = useState('');
  const currencyFirstHeandler = ({ target }) => {
    setCurrencyFirst(target.value);
    if (cours === '') {
      return false;
    };
    setCurrencySecond((target.value / cours).toFixed(2));
  };
  const coursHeandler = ({ target }) => {
    setCours(target.value);
    setCurrencySecond((currencyFirst / target.value).toFixed(2));
  };
  const currencySecondHeandler = ({ target }) => {
    setCurrencySecond(target.value);
    setCurrencyFirst((target.value * cours).toFixed(2));
  };
  const InputCurrencyItems = [
    {
      id: 1,
      placeholder: '555.55',
      className: 'currency__second',
      value: currencySecond,
      onChange: currencySecondHeandler
    },
    {
      id: 2,
      placeholder: '72',
      className: 'cours',
      value: cours,
      onChange: coursHeandler
    },
    {
      id: 3,
      placeholder: '40000',
      className: 'currency__first',
      value: currencyFirst,
      onChange: currencyFirstHeandler
    },
  ];

  return (
    <div className={css.perspective}>
      <h4>ПЕРСПЕКТИВА (обратнная конвертация)</h4>
      <p>Доллар США</p>
      <p>Текущий Курс</p>
      <p>Российский рубль</p>
      {InputCurrencyItems.map(item => (<InputCurrency
        key={item.id}
        id={item.id}
        placeholder={item.placeholder}
        className={item.className}
        value={item.value}
        onChange={item.onChange}
      />)
      )}
      <p className={css.teg__margin}>Маржа:</p>
      <div className={css.margin__number}>+96000</div>
      <BtnRestore />
    </div>
  )
}

// в процессе
const mapStateToProps = (state) => ({
  totalCurrencyFirst: state.totalCurrencyFirst,
  totalCurrencySecond: state.totalCurrencySecond
})

export default connect(mapStateToProps)(Perspective);
