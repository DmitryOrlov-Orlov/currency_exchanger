import React from 'react';
import css from './BtnAddPosition.module.css';

const BtnAddPosition = ({ changeAddPosition }) => (
  <button onClick={changeAddPosition} className={css.button}>Добавить позицию</button>
)

export default BtnAddPosition;
