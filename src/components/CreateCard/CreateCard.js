import React from 'react';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import css from './CreateCard.module.css';

const CreateCard = () => {

  return (
    <div className={css.CreateCard}>
      <p>На</p>
      <SelectCurrency />
      <p>купил</p>
      <SelectCurrency />
      <button className={css.button}>Создать карточку</button>
    </div>
  )
}

export default CreateCard;
