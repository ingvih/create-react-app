import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const LoadableNews = Loadable({
    loader: () => import('./containers/News'),
    loading() {
        return <div>Loading...</div>
    }
});

const LoadablePage = Loadable({
    loader: () => import('./containers/Page'),
    loading() {
        return <div>Loading...</div>
    }
});

export default () =>
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={LoadableNews} />
    <Route path="/page" component={LoadablePage} />
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} status={404} />
</Switch>;