import React from 'react';
import { connect } from 'react-redux';
import { changeTotalCurrency } from '../../actions';
import css from './Total.module.css';

const Total = ({ pages, activePageId, changeTotalCurrency }) => {
  let totalCurrencyFirst = 0;
  let totalCurrencySecond = 0;
  pages.map(item => {
    if (item.id === activePageId) {
      totalCurrencyFirst = item.totalCurrencyFirst;
      totalCurrencySecond = item.totalCurrencySecond;
    }
    return true;
  })

  return (
    <div className={css.total}>
      <div className={css.total__titles}>
        <p>{pages.map(item => item.id === activePageId ? item.pagesNameFirst : null)}</p>
        <p className={css.total__red}>Итог</p>
        <p>{pages.map(item => item.id === activePageId ? item.pagesNameSecond : null)}</p>
        <div className={css.total__currency__first}>{totalCurrencyFirst}</div>
        <div className={css.total__currency__second}>{totalCurrencySecond}</div>
      </div>
      <button onClick={changeTotalCurrency}>Рассчитать</button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  pages: state.pages,
  activePageId: state.activePageId
})
const mapDispatchToProps = (dispatch) => ({
  changeTotalCurrency: () => dispatch(changeTotalCurrency())
})

export default connect(mapStateToProps, mapDispatchToProps)(Total);
