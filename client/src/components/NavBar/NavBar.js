import React, { Component } from 'react';
import {Link, Redirect } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      homeRedirect: false
    }
  }

  redirectHome() {
    if(window.location.pathname != "/") this.setState({ homeRedirect: true });
  }

  render() {
    return(
      <div className="NavBar">
        <nav>
          <div className="NavBar-Logo" onClick={(e => this.redirectHome())}></div>
          <Link className="navBar NavBar-Home" to="/">Home
            <span className="navBar-text">

            </span>
          </Link>
          <Link className="navBar NavBar-About" to="/about">About
            <span className="navBar-text">

            </span>
          </Link>
          <Link className="navBar NavBar-Contact" to="/contact">Contact
            <span className="navBar-text">

            </span>
          </Link>
          <Link className="navBar NavBar-Portfolio" to="/portfolio">Portfolio
            <div className="navBar-text-container navBar-background" />
            <div className="navBar-text-container">
              <Link className="navBar-text" to="/portfolio/sfx">Special Effects</Link>
              <Link className="navBar-text navBar-beauty" to="/portfolio/beauty">Beauty Makeup</Link>
            </div>
          </Link>
        </nav>
        {this.state.homeRedirect ? <Redirect to="/" /> : ''}
      </div>
    );
  }
};

export default NavBar;
