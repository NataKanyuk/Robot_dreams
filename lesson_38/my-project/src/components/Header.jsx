import React from "react";
import "./Header.css";
import Cart from "./Cart";

function Header(props) {
 return (
    <header>
       <img src="https://cdn.create.vista.com/downloads/61b7ada1-768b-4803-b7d1-cf5f1dac97f1_1024.jpeg"  alt="logo" className="logo"/>
      <h1>Flower_shop</h1>
      <div className="header-info">
      <div>
          <Cart count={props.count}></Cart>
        </div>
        <p>
          Kronprinsensgade 29, 6700 Esbjerg ,Denmark<br></br>
        </p>
        <p>
          Mon - Fri: 06:00 - 22:00<br></br>Sat - Sun: 08:00 - 20:00
        </p>
      </div>
    </header>
  );
}

export default Header;
