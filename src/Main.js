
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Contact from './Contact'

class Main extends Component {
  render() {
    return (
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Main;




