import React from 'react';
import classes from './Total.module.css';

const Total = () => {

  return (
    <div className={classes.total}>
      <div className={classes.total__titles}>
        <p>Российский рубль</p>
        <p className={classes.total__red}>Итог</p>
        <p>Доллар США</p>
        <div className={classes.total__currency__first}> 40000</div>
        <div className={classes.total__currency__second}>555.55</div>
      </div>
    </div >
  )
}

export default Total;
