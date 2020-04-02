import React, { Component } from "react";

import IGlogo from '../../Images/instagramWhite.png';
import Twitterlogo from '../../Images/Twitterlogo.png';

import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">

        <p>Privacy</p>

        <ul>
          <div classname='footerlinks'>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </div>
        </ul >

        <ul>
          <div classname='footerImglinks'>
            <li><a href="#"> <img src={IGlogo} alt="IG-Logo" /></a></li>
            <li><a href="#"> <img src={Twitterlogo} alt="Twitter-Logo" /></a></li>
          </div>
        </ul >



      </footer >
    );
  }
}
