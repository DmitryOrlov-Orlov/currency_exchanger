import React from 'react';
import css from './SelectCurrency.module.css';

const SelectCurrency = () => {
  const currencyItem = [
    {
      id: 1,
      currency: "Российский рубль"
    },
    {
      id: 2,
      currency: "Доллар США"
    },
    {
      id: 3,
      currency: "Евро"
    },
    {
      id: 4,
      currency: "Фунт стерлингов"
    },
    {
      id: 5,
      currency: "Биткоин"
    },
    {
      id: 6,
      currency: "Эфириум"
    },
  ]

  return (
    <select className={css.select}>
      {currencyItem.map((item) => (
        <option key={item.id} value={item.currency}>{item.currency}</option>)
      )}
    </select>
  )
}

export default SelectCurrency;
