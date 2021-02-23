import React from 'react';
import { connect } from 'react-redux';
import { changeTotalCurrency, changeResultOfPerspective } from '../../actions';
import css from './Total.module.css';

const Total = ({ pages, activePageId, changeTotalCurrency, changeResultOfPerspective }) => {
  let totalCurrencyFirst = 0;
  let totalCurrencySecond = 0;
  pages.forEach(item => {
    if (item.id === activePageId) {
      totalCurrencyFirst = (item.totalCurrencyFirst).toFixed(2);
      totalCurrencySecond = (item.totalCurrencySecond).toFixed(2);
    }
  })

  const handler = () => {
    changeResultOfPerspective();
    changeTotalCurrency();
  }

  return (
    <div className={css.total}>
      <div className={css.total__titles}>
        <p>{pages.map(item => item.id === activePageId && item.pagesNameFirst)}</p>
        <p className={css.total__red}>Итог</p>
        <p>{pages.map(item => item.id === activePageId && item.pagesNameSecond)}</p>
        <div className={css.total__currency__first}>{totalCurrencyFirst}</div>
        <div className={css.total__currency__second}>{totalCurrencySecond}</div>
      </div>
      <button className={css.button} onClick={handler}>Рассчитать</button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  pages: state.pages,
  activePageId: state.activePageId
})
const mapDispatchToProps = (dispatch) => ({
  changeTotalCurrency: () => dispatch(changeTotalCurrency()),
  changeResultOfPerspective: () => dispatch(changeResultOfPerspective())
})

export default connect(mapStateToProps, mapDispatchToProps)(Total);
