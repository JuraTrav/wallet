import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './containers/App';
import Overview from './containers/Overview';
import Settings from './containers/Settings';
import Transaction from './containers/Transaction';

import reducer from './reducers'

import './styles/dest/main.min.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/overview" component={Overview} />
      <Route path="/settings" component={Settings} />
      <Route path="/transaction" component={Transaction} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
