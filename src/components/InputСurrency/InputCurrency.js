import React from 'react';
import './InputCurrency.css';

const InputCurrency = ({ id, placeholder, className, value, onChange, dataOnChange }) => {

  return (
    <input
      id={id}
      data-onchange={dataOnChange}
      type="number"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputCurrency;
