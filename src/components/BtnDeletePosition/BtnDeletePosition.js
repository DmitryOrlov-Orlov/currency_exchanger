import React from 'react';
import { connect } from 'react-redux';
import { changeDelPosition } from '../../actions';
import css from './BtnDeletePosition.module.css';

const BtnDeletePosition = ({ changeDelPosition, id }) => {

  return (
    <button id={id} onClick={changeDelPosition} className={css.btn__delete__position}></button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeDelPosition: (event) => dispatch(changeDelPosition(event.target))
})

export default connect(null, mapDispatchToProps)(BtnDeletePosition);
