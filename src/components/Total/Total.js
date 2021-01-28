import React from 'react';
import { connect } from 'react-redux';
import { changeTotalCurrencyFirstAndSecond } from '../../actions';
import css from './Total.module.css';

const Total = ({ totalCurrencyFirst, totalCurrencySecond, changeTotal }) => {

  return (
    <div className={css.total}>
      <div className={css.total__titles}>
        <p>Российский рубль</p>
        <p className={css.total__red}>Итог</p>
        <p>Доллар США</p>
        <div className={css.total__currency__first}>{totalCurrencyFirst}</div>
        <div className={css.total__currency__second}>{totalCurrencySecond}</div>
      </div>
      <button onClick={changeTotal}>Рассчитать</button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  totalCurrencyFirst: state.totalCurrencyFirst,
  totalCurrencySecond: state.totalCurrencySecond
})
const mapDispatchToProps = (dispatch) => ({
  changeTotal: () => dispatch(changeTotalCurrencyFirstAndSecond())
})

export default connect(mapStateToProps, mapDispatchToProps)(Total);
