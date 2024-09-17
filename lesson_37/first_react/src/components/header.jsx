import React from 'react';
import './header.css';

function header() {
  return (
    <header>
      <h1>Flower_shop</h1>
      <div className='header-info'>
        <p>Kronprinsensgade 29, 6700 Esbjerg ,Denmark<br></br></p>
        <img src="logo.png" alt="logo"></img>
        <p>Mon - Fri: 06:00 - 22:00<br></br>Sat - Sun: 08:00 - 20:00</p>
      </div>
    </header>
  );
}

export default header;