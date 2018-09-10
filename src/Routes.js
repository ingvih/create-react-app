import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Home from './containers/Home'
// import News from './News'
// import Contact from './Contact'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const LoadableNews = Loadable({
    loader: () => import('./containers/News'),
    loading() {
        return <div>Loading...</div>
    }
});

const LoadableContact = Loadable({
    loader: () => import('./containers/Contact'),
    loading() {
        return <div>Loading...</div>
    }
});

export default () =>
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={LoadableNews} />
    <Route path="/contact" component={LoadableContact} />
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} status={404} />
</Switch>;