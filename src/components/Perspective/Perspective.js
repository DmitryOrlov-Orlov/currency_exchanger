import React from 'react';
import { connect } from 'react-redux';
import InputCurrency from '../InputСurrency/InputCurrency';
import BtnUpdateCourse from '../BtnUpdateCourse/BtnUpdateCourse';
import { changeResultFirst, changeResultSecond, changeResultCours } from '../../actions';
import css from './Perspective.module.css';

const Perspective = ({
  pages,
  activePageId,
  changeResultFirst,
  changeResultSecond,
  changeResultCours
}) => {
  let perspectiveCurrencyFirst = 0;
  let perspectiveCurrencySecond = 0;
  let apiCours = 0;
  let margin = 0;
  pages.forEach(item => {
    if (item.id === activePageId) {
      apiCours = item.apiCours;
      perspectiveCurrencyFirst = item.perspectiveCurrencyFirst;
      perspectiveCurrencySecond = item.perspectiveCurrencySecond;
      margin = item.margin;
    }
  })
  const changeResultFirstHandler = (event) => {
    let value = event.target.value;
    changeResultFirst(value);
  }
  const changeResultSecondHandler = (event) => {
    let value = event.target.value;
    changeResultSecond(value);
  }
  const changeResultCoursHandler = (event) => {
    let value = event.target.value;
    changeResultCours(value);
  }

  const InputCurrencyItems = [
    {
      id: 1,
      placeholder: '555.55',
      className: 'currency__second',
      value: perspectiveCurrencySecond,
      onChange: changeResultSecondHandler
    },
    {
      id: 2,
      placeholder: '72',
      className: 'cours',
      value: apiCours,
      onChange: changeResultCoursHandler
    },
    {
      id: 3,
      placeholder: '40000',
      className: 'currency__first',
      value: perspectiveCurrencyFirst,
      onChange: changeResultFirstHandler
    },
  ];

  return (
    <div className={css.perspective}>
      <h4>ПЕРСПЕКТИВА (обратнная конвертация)</h4>
      <p>{pages.map(item => item.id === activePageId && item.pagesNameSecond)}</p>
      <p>Текущий Курс</p>
      <p>{pages.map(item => item.id === activePageId && item.pagesNameFirst)}</p>
      {InputCurrencyItems.map(item => (< InputCurrency
        key={item.id}
        id={item.id}
        placeholder={item.placeholder}
        className={item.className}
        value={item.value}
        onChange={item.onChange}
      />)
      )}
      <p className={css.teg__margin}>Маржа:</p>
      <div className={css.margin__number}>{(margin).toFixed(2)}</div>
      <BtnUpdateCourse />
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.pages,
  activePageId: state.activePageId
})

const mapDispatchToProps = (dispatch) => ({
  changeResultFirst: (value) => dispatch(changeResultFirst(value)),
  changeResultSecond: (value) => dispatch(changeResultSecond(value)),
  changeResultCours: (value) => dispatch(changeResultCours(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Perspective);
