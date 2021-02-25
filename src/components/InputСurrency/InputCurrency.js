import React from 'react';
import './InputCurrency.css';

const InputCurrency = ({ id, placeholder, className, value, onChange, dataIdInput }) => {

  return (
    <input
      id={id}
      data-id-input={dataIdInput}
      type="number"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputCurrency;
