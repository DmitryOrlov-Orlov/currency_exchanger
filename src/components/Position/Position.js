import React, { useState } from 'react';
import BtnDeletePosition from '../BtnDeletePosition/BtnDeletePosition';
import './Position.css';

const Position = () => {
  const [currencyFirst, setCurrencyFirst] = useState('');
  const [cours, setCours] = useState('');
  const [currencySecond, setCurrencySecond] = useState('');

  const currencyFirstHeandler = ({ target }) => {
    setCurrencyFirst(target.value);
    setCurrencySecond(target.value / cours);
  };
  const coursHeandler = ({ target }) => {
    setCours(target.value);
    setCurrencySecond(currencyFirst / target.value);
  };
  const currencySecondHeandler = ({ target }) => {
    setCurrencySecond(target.value);
    setCurrencyFirst(target.value * cours);
  };

  return (
    <div className='position'>
      <div className='position__titles'>
        <p>Российский рубль</p>
        <p>Курс</p>
        <p>Доллар США</p>
        <input
          type="number"
          placeholder='40000'
          className='currency__first'
          value={currencyFirst}
          onChange={currencyFirstHeandler}
        />
        <input
          type="number"
          placeholder='72'
          className='cours'
          value={cours}
          onChange={coursHeandler}
        />
        <input
          type="number"
          placeholder='555.55'
          className='currency__second'
          value={currencySecond}
          onChange={currencySecondHeandler}
        />
      </div>
      <BtnDeletePosition />
    </div>
  )
}

export default Position;
