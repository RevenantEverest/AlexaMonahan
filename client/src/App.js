import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Component Imports
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import SFX from './components/Portfolio/SFX/SFX';
import Beauty from './components/Portfolio/Beauty/Beauty';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-container">
            <div className="App-NavBar">
              <NavBar />
            </div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/sfx" component={SFX} />
            <Route path="/portfolio/beauty" component={Beauty} />
            <div className="App-Footer">
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
