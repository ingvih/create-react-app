
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Contact from './Contact'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

class Main extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;




