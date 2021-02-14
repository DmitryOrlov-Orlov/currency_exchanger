import React from 'react';
import Select from 'react-select';
import currencyItem from '../../json/currencyItem.json';
import css from './SelectCurrency.module.css';

const SelectCurrency = ({ defaultValue, onChange }) => {

  return (
    <div>
      <Select
        onChange={onChange}
        className={css.select}
        defaultValue={currencyItem[defaultValue]}
        options={currencyItem}
      />
    </div>
  )
}

export default SelectCurrency;
