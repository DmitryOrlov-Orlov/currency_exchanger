import React from 'react';
import { connect } from 'react-redux';
import { deletePosition } from '../../actions';
import css from './BtnDeletePosition.module.css';

const BtnDeletePosition = ({ deletePosition, id }) => {

  return (
    <button id={id} onClick={deletePosition} className={css.btn}></button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deletePosition: (event) => dispatch(deletePosition(event.target))
})

export default connect(null, mapDispatchToProps)(BtnDeletePosition);
