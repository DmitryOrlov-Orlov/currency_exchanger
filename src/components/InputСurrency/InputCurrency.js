import React from 'react';
import './InputCurrency.css';

const InputCurrency = (props) => {

  return (
    <>
      <input
        type="number"
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputCurrency;
