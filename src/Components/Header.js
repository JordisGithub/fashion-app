import React, { Component } from "react";
import styles from 'styled'


export default class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <h1>Sustaiable Fashion Movement</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <img src={'../Images/Instagram-Gray.png'} />
      </header>
    );
  }
}

//font: Kazimir and 
//Brandon Grotesque