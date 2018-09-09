
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';

import Home from './Home'
// import News from './News'
// import Contact from './Contact'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const LoadableNews = Loadable({
  loader: () => import('./News'),
  loading() {
    return <div>Loading...</div>
  }
});

const LoadableContact = Loadable({
  loader: () => import('./Contact'),
  loading() {
    return <div>Loading...</div>
  }
});

class Main extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={LoadableNews} />
          <Route path="/contact" component={LoadableContact} />
          <Route path="/login" exact component={Login} />
          <Route component={NotFound} status={404} />
        </Switch>
      </div>
    );
  }
}

export default Main;




