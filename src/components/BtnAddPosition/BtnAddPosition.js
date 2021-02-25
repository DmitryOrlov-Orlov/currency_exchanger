import React from 'react';
import css from './BtnAddPosition.module.css';

const BtnAddPosition = ({ addPosition }) => (
  <button onClick={addPosition} className={css.button}>Добавить позицию</button>
)

export default BtnAddPosition;
