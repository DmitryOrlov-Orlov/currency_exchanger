import React from 'react';
import { connect } from 'react-redux';
import { deleteCard, changeActivePageId } from '../../actions';
import css from './Card.module.css';

const Card = ({
  id,
  pagesNameFirst,
  pagesNameSecond,
  deleteCard,
  changeActivePageId
}) => {

  const deleteHandler = ({ target }) => {
    deleteCard(target.id);
  }
  const activeHandler = ({ target }) => {
    changeActivePageId(target.id);
  }
  return (
    <div id={id} className={css.sheet} onClick={activeHandler} >
      <div className={css.sheet__currencies} id={id} onClick={activeHandler}>
        <p id={id} onClick={activeHandler}>{pagesNameFirst}</p>
        <p id={id} onClick={activeHandler}> - </p>
        <p id={id} onClick={activeHandler}>{pagesNameSecond}</p>
      </div>
      <button className={css.button} onClick={deleteHandler} id={id}></button>
    </div >
  )
}
const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id)),
  changeActivePageId: (id) => dispatch(changeActivePageId(id)),
})

export default connect(null, mapDispatchToProps)(Card);
