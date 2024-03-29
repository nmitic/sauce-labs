import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import devices from './modules/devices';
import availability from './modules/availability';
import sidebar from './modules/sidebar';
import { connectRouter } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default createStore(
  combineReducers({ 
    devices, 
    availability,
    sidebar,
    router: connectRouter(history) 
  }),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
);
