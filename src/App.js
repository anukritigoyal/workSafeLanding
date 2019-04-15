import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Product from './Product.js';
import Team from './Team.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <About></About>
        <Product></Product>
        <Team></Team>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
