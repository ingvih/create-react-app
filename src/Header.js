import React, { Component } from 'react';
import {
    Route,
    NavLink
  } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1> */}
        <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;
