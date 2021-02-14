import React from 'react';
import { connect } from 'react-redux';
import { changeDeleteCard, changeActivePageId } from '../../actions';
import css from './Card.module.css';

const Card = ({ id, pagesNameFirst, pagesNameSecond, changeDeleteCard, changeActivePageId }) => {

  return (
    <div id={id} className={css.sheet} onClick={changeActivePageId} >
      <p>{pagesNameFirst}</p>
      <p> - </p>
      <p>{pagesNameSecond}</p>
      <button className={css.button} onClick={changeDeleteCard} id={id}></button>
    </div >
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeDeleteCard: (event) => dispatch(changeDeleteCard(event.target)),
  changeActivePageId: (event) => dispatch(changeActivePageId(event.target)),
})

export default connect(null, mapDispatchToProps)(Card);
