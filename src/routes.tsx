import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/country/:country" component={Details} />
    </Switch>
  </Router>
);

export default Routes;
