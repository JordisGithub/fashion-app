import React, { Component } from 'react';
import '../Components/App.css'
// import { Route, NavLink, HashRouter, Link } from "react-router-dom";

//Components
import Nav from './Nav/Nav'
import HeroSection from './HeroSection/HeroSection'
import FeauturedBlog from './FeaturedBlog/FeauturedBlog'
import FeaturedBrands from './FeaturedBrands/FeaturedBrands'
import Footer from '../Components/Footer/Footer'

//Images
import mainPicture from '../Images/Fast-Fashion-Cancelled.png'
import brunchPicture from '../Images/Fashion-Brunch.png'
import blogPicture from '../Images/Reformation.png'
import blogPicture2 from '../Images/Stella-Mccarthy.png'
import blogPicture3 from '../Images/Pour-Les-Femmes.png'
import blogPicture4 from '../Images/Gabriela-Hearst.png'


class App extends Component {
  render() {
    return (
      <section className="section">

        <Nav />
        <HeroSection />
        <FeauturedBlog
          mainPicture={mainPicture}
          outline=""
          title={'FAST FASHION IS #CANCELLED'}
          blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          mainPicture2={brunchPicture}
          outline2=""
          title2={'FASHION SWAPS ARE THE NEW BRUCH'}
          blogSummary2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />
        <FeaturedBrands
          blogPicture={blogPicture}
          title={'Reformation'}
          blogPicture2={blogPicture2}
          title2={'Stella Mccarthy'}
          blogPicture3={blogPicture3}
          title3={'Pour Les Femmes'}
          blogPicture4={blogPicture4}
          title4={'Gabriela Hearst'}
        />
        <Footer />

      </section >
    );
  }
}

export default App;