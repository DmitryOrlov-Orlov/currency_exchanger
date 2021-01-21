import React from 'react';
import Position from '../Position/Position';
import Total from '../Total/Total';
import BtnAddPosition from "../BtnAddPosition/BtnAddPosition";
import Perspective from '../Perspective/Perspective';
import classes from './CardWrapper.module.css';

const CardWrapper = () => {

  return (
    <div className={classes.card__wrapper}>
      <h4>Карточка “Российкий рубль - Доллар США”</h4>
      <Position />
      <Position />
      <BtnAddPosition />
      <hr />
      <Total />
      <hr />
      <Perspective />
    </div>
  )
}

export default CardWrapper;
