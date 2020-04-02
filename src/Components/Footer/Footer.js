import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import IGlogo from '../../Images/instagramWhite.png';
import Twitterlogo from '../../Images/Twitterlogo.png';
import facebookLogo from '../../Images/facebookLogo.png';

import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <header className="footer">
        <p>Privacy</p>

        <ul>
          <li><a href="#"> <img src={IGlogo} alt="IG-Logo" /></a></li>
          <li><a href="#"> <img src={Twitterlogo} alt="Twitter-Logo" /></a></li>
          <li><a href="#"> <img src={facebookLogo} alt="Facebook-Logo" /></a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul >
      </header >
    );
  }
}