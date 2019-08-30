import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store.js';
import Header from './components/Header/Header';
import OverviewContainer from './containers/OverviewContainer/OverviewContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import FilterContainer from './containers/FilterContainer/FilterContainer';
import './app.scss';


const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <div className="app">
          <SidebarContainer />
          <FilterContainer />
          <Switch>
            <Route exact path="/" render={() => (<OverviewContainer />)} />
            <Route render={() => (<div>Not found :(</div>)} />
          </Switch>
        </div>
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
