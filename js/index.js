import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config'
//import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import App from './components/App';

let store=configureStore();

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('wrapper')
);
