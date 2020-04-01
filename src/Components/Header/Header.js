import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import IGlogo from '../../Images/IGlogo.png';
import SearchButton from '../../Images/Search.png';
import './Header.css';


export default class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <h1>Sustainable Fashion Movement</h1>
        <ul>
          <li><a href="#"> <img src={SearchButton} alt="IG-Logo" /></a></li>
          <li><a href="#"> <img src={IGlogo} alt="IG-Logo" /></a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Home</a></li>
        </ul >
      </header >
    );
  }
}