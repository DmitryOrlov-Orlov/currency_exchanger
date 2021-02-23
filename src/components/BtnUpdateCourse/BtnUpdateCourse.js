import React from 'react';
import { connect } from 'react-redux';
import { changeResultOfPerspective } from '../../actions';
import css from './BtnUpdateCourse.module.css';

const BtnUpdateCourse = ({ changeResultOfPerspective }) => {
  return (
    <button className={css.button} onClick={changeResultOfPerspective}>Обновить</button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeResultOfPerspective: () => dispatch(changeResultOfPerspective())
})

export default connect(null, mapDispatchToProps)(BtnUpdateCourse);
