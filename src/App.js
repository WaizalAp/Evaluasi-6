import React, { Component } from 'react';
import DataP from './container/DataPost';
import Detail from './container/Detail-Id';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={DataP} />
            <Route exact path='/:id' component={Detail} />
            <Route component={DataP} />
			</Switch>
		</div>
    );
  }
}

export default App;
