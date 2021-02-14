import React from 'react';
import { connect } from 'react-redux';
import Position from '../Position/Position';
import Total from '../Total/Total';
import BtnAddPosition from "../BtnAddPosition/BtnAddPosition";
import Perspective from '../Perspective/Perspective';
import { changeAddPosition } from '../../actions';
import css from './CardWrapper.module.css';

const CardWrapper = ({ cards, changeAddPosition, activePageId, pages }) => {

  return (
    <div className={css.card__wrapper}>
      <h4>
        {pages.map(item => item.id === activePageId ? item.pagesNameFirst : null)}
      -
        {pages.map(item => item.id === activePageId ? item.pagesNameSecond : null)}
      </h4>
      {cards.map(item => item.pageId === activePageId ? <Position
        key={item.id}
        id={item.id}
        currencyFirst={item.currencyFirst}
        currencySecond={item.currencySecond}
        currencyCourse={item.currencyCourse}
        cardsNameFirst={item.cardsNameFirst}
        cardsNameSecond={item.cardsNameSecond}
      /> : null
      )}
      <BtnAddPosition changeAddPosition={changeAddPosition} />
      <hr />
      <Total />
      <hr />
      <Perspective />
    </div>
  )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  activePageId: state.activePageId,
  pages: state.pages
})
const mapDispatchToProps = (dispatch) => ({
  changeAddPosition: () => dispatch(changeAddPosition())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);
