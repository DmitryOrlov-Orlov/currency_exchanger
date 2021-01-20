import React from 'react';
import './Total.css';

const Total = () => {

  return (
    <div className='total' >
      <div className='total__titles'>
        <p>Российский рубль</p>
        <p className='total__red'>Итог</p>
        <p>Доллар США</p>
        <div className='total__currency__first' > 40000</div>
        <div className='total__currency total__currency__second' >555.55</div>
      </div>
    </div >
  )
}

export default Total;
