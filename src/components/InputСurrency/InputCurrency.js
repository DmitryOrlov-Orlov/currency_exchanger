import React from 'react';
import './InputCurrency.css';

const InputCurrency = ({ placeholder, className, value, onChange }) => {

  return (
    <input
      type="number"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputCurrency;
