import React from 'react';
import { connect } from 'react-redux';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import {
  changeNameCurrencyFirst,
  changeNameCurrencySecond,
  changeCreateCard
} from '../../actions/';
import css from './CreateCard.module.css';

const CreateCard = ({
  nameFirst,
  nameSecond,
  changeNameCurrencyFirst,
  changeNameCurrencySecond,
  changeCreateCard
}) => {
  const onChangeCurrencyFirst = (event) => {
    changeNameCurrencyFirst(event.value)
  }
  const onChangeCurrencySecond = (event) => {
    changeNameCurrencySecond(event.value);
  }
  const createCardHendler = () => {
    changeCreateCard(nameFirst, nameSecond);
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
  nameSecond: state.nameSecond
})
const mapDispatchToProps = (dispatch) => ({
  changeNameCurrencyFirst: (value) => dispatch(changeNameCurrencyFirst(value)),
  changeNameCurrencySecond: (value) => dispatch(changeNameCurrencySecond(value)),
  changeCreateCard: (nameFirst, nameSecond) => dispatch(changeCreateCard(nameFirst, nameSecond))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
