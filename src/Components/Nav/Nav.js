import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
// import Contact from '../Pages/Contact'


import SearchButton from '../../Images/Search.png';
import './Nav.css';


export default class Nav extends Component {
  render() {
    return (
      <header className="navbar">
        <HashRouter>
          <h1 className='siteName'>Sustainable Fashion Movement</h1>

          <ul>
            {/* <li><a href="#"> <img src={SearchButton} alt="" /></a></li> */}
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul >

          {/* <Route path="/Contact" component={Contact} /> */}
        </HashRouter>
      </header >
    );
  }
}