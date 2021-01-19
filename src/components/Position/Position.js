import React, { useState } from 'react';
import BtnDeletePosition from '../BtnDeletePosition/BtnDeletePosition';
import InputCurrency from '../InputСurrency/InputCurrency';
import './Position.css';

const Position = () => {
  const [currencyFirst, setCurrencyFirst] = useState('');
  const [cours, setCours] = useState('');
  const [currencySecond, setCurrencySecond] = useState('');
  const currencyFirstHeandler = ({ target }) => {
    setCurrencyFirst(target.value);
    if (cours === '') {
      return false;
    };
    setCurrencySecond((target.value / cours).toFixed(4));
  };
  const coursHeandler = ({ target }) => {
    setCours(target.value);
    setCurrencySecond((currencyFirst / target.value).toFixed(4));
  };
  const currencySecondHeandler = ({ target }) => {
    setCurrencySecond(target.value);
    setCurrencyFirst((target.value * cours).toFixed(4));
  };
  let InputCurrencyArr = [
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
  let InputCurrencyItems = InputCurrencyArr.map(item => {
    return (<InputCurrency
      key={item.id}
      placeholder={item.placeholder}
      className={item.className}
      value={item.value}
      onChange={item.onChange}
    />);
  });

  return (
    <div className='position'>
      <div className='position__titles'>
        <p>Российский рубль</p>
        <p>Курс</p>
        <p>Доллар США</p>
        {InputCurrencyItems}
      </div>
      <BtnDeletePosition />
    </div>
  )
};

export default Position;
