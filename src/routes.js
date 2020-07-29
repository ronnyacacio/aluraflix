import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/New/Video';
import Category from './pages/New/Category';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new/video" component={Video} />
        <Route path="/new/category" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
