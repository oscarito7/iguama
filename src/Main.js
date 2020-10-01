import React, { Component } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactFontFace from 'react-font-face';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'

class Main extends Component {
  render() {
    const styles = {
        main: {
          margin: 15,
          lineHeight: 1.4,
          fontFamily: 'Bangers',
        },
        google1: {
          fontFamily: 'Pangolin',
          fontSize: '49px',
        },
        google2: {
          fontFamily: 'Roboto Mono',
        },
      };
    return (
        
      <HashRouter>
        <div>
        <p style={ styles.google1 }>Shoppers</p>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
          <div class="animation"> 
        <ScrollAnimation animateIn="fadeOut">
  <h2>Este texto tiene anicacion con Scroll animation</h2>
</ScrollAnimation>
        </div>
        </div>
        <div class="imagenes">
        <AliceCarousel autoPlay autoPlayInterval = "2000"> 
      <img src = {image1} className = "sliderimg" /> 
      <img src = {image2} className = "sliderimg" /> 
        </AliceCarousel>
        </div>
       
      </HashRouter>

      
    );
  }
}
 
export default Main;