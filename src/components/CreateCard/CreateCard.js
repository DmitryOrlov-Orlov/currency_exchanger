import React from 'react';
import { connect } from 'react-redux';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import {
  changeNameCurrencyFirst,
  changeNameCurrencySecond,
  changeRateFirst,
  changeRateSecond,
  createCard
} from '../../actions/';
import css from './CreateCard.module.css';

const CreateCard = ({
  nameFirst,
  nameSecond,
  rateFirst,
  rateSecond,
  changeNameCurrencyFirst,
  changeNameCurrencySecond,
  changeRateFirst,
  changeRateSecond,
  createCard
}) => {
  const onChangeCurrencyFirst = (event) => {
    let value = event.value;
    let rateFirst = event.rate;
    changeNameCurrencyFirst(value);
    changeRateFirst(rateFirst);
  }
  const onChangeCurrencySecond = (event) => {
    let value = event.value;
    let rateSecond = event.rate;
    changeNameCurrencySecond(value);
    changeRateSecond(rateSecond);
  }
  const createCardHendler = () => {
    createCard(nameFirst, nameSecond, rateFirst, rateSecond);
  }

  return (
    <div className={css.create__card}>
      <p>На</p>
      <SelectCurrency onChange={onChangeCurrencyFirst} defaultValue={0} />
      <p>купил</p>
      <SelectCurrency onChange={onChangeCurrencySecond} defaultValue={1} />
      <button onClick={createCardHendler} className={css.button}>Создать карточку</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  nameFirst: state.nameFirst,
  nameSecond: state.nameSecond,
  rateFirst: state.rateFirst,
  rateSecond: state.rateSecond
})
const mapDispatchToProps = (dispatch) => ({
  changeNameCurrencyFirst: (value) => dispatch(changeNameCurrencyFirst(value)),
  changeNameCurrencySecond: (value) => dispatch(changeNameCurrencySecond(value)),
  changeRateFirst: (value) => dispatch(changeRateFirst(value)),
  changeRateSecond: (value) => dispatch(changeRateSecond(value)),
  createCard: (nameFirst, nameSecond, rateFirst, rateSecond) =>
    dispatch(createCard(nameFirst, nameSecond, rateFirst, rateSecond))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
