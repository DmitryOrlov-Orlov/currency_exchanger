import React from 'react';
import { connect } from 'react-redux';
import { changeAddPosition } from '../../actions';
import css from './BtnAddPosition.module.css';

const BtnAddPosition = ({ changeAddPosition }) => (
  <button onClick={changeAddPosition} className={css.button}>Добавить позицию</button>
)

const mapDispatchToProps = (dispatch) => ({
  changeAddPosition: () => dispatch(changeAddPosition())
})

export default connect(null, mapDispatchToProps)(BtnAddPosition);
