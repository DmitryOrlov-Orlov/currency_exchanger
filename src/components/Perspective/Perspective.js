import React, { useState } from 'react';
import InputCurrency from '../InputСurrency/InputCurrency';
import BtnRestore from '../BtnRestore/BtnRestore';
import classes from './Perspective.module.css';

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
      placeholder: '40000',
      className: 'currency__first',
      value: currencyFirst,
      onChange: currencyFirstHeandler
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
      placeholder: '555.5555',
      className: 'currency__second',
      value: currencySecond,
      onChange: currencySecondHeandler
    },
  ];


  return (
    <div className={classes.perspective}>
      <h4>ПЕРСПЕКТИВА (обратнная конвертация)</h4>
      <p>Российский рубль</p>
      <p>Текущий Курс</p>
      <p>Доллар США</p>
      {InputCurrencyItems.map(item => (<InputCurrency
        key={item.id}
        placeholder={item.placeholder}
        className={item.className}
        value={item.value}
        onChange={item.onChange}
      />)
      )}
      <p className={classes.teg__margin}>Маржа:</p>
      <div className={classes.margin__number}>+96000</div>
      <BtnRestore />
    </div>
  )
}

export default Perspective;
