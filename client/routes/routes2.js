import React from 'react';
import {Switch, Route} from 'react-router';
import Root from '../root';
import Test from '../test';

const Routes = () => (
  <Root>
    <Switch>
      <Route path="/" component={Root} />
      <Route path="/test" component={Test} />
    </Switch>
  </Root>
);

export default Routes;
