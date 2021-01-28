import React from 'react';
import './InputCurrency.css';

const InputCurrency = ({ id, placeholder, className, value, onChange }) => {

  return (
    <input
      id={id}
      type="number"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputCurrency;
