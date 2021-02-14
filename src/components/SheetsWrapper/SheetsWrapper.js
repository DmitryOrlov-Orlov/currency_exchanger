import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import css from './SheetsWrapper.module.css';

const SheetsWrapper = ({ pages }) => {

  return (
    <div className={css.sheetsWrapper}>
      {pages.length === 0 ? <h4>Создайте свою первую карточку</h4> : <h4>Список моих карточек</h4>}
      {pages.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            pagesNameFirst={item.pagesNameFirst}
            pagesNameSecond={item.pagesNameSecond}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

export default connect(mapStateToProps)(SheetsWrapper);
