import React from 'react';
import { connect } from 'react-redux';
import Position from '../Position/Position';
import Total from '../Total/Total';
import BtnAddPosition from "../BtnAddPosition/BtnAddPosition";
import Perspective from '../Perspective/Perspective';
import css from './CardWrapper.module.css';

const CardWrapper = ({ cards, test }) => {
  return (
    <div className={css.card__wrapper}>
      <h4>Карточка “Российкий рубль - Доллар США”</h4>
      {cards.map(item => {
        return (<Position
          key={item.id}
          id={item.id}
          currencyFirst={item.currencyFirst}
          currencySecond={item.currencySecond}
          cours={item.cours}
        />)
      })}
      <BtnAddPosition />
      <hr />
      <Total />
      <hr />
      <Perspective />
    </div>
  )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  test: state.test//без этой строчик не работает
})

export default connect(mapStateToProps)(CardWrapper);
