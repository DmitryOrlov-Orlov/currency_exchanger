import React from 'react';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import css from './CreateCard.module.css';

const CreateCard = () => {

  return (
    <div className={css.create__card}>
      <p>На</p>
      <SelectCurrency defaultValue={0} />
      <p>купил</p>
      <SelectCurrency defaultValue={1} />
      <button className={css.button}>Создать карточку</button>
    </div>
  )
}

export default CreateCard;
