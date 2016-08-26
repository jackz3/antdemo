import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config'
import { hashHistory, Router, Route, IndexRoute, browserHistory } from 'react-router'
import Table from './components/Table'
import App from './components/App'
import Home from './components/Home'
import Posts from './components/Posts'

let store=configureStore();

ReactDOM.render(
	<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        {/*
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        */}
        <Route path="/posts" component={Posts}/>
        <Route path="/table" component={Table}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
);
