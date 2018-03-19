import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.css';

import App from './App';
import Header from './components/header';
import Home from './components/home';


ReactDOM.render(
  <Router>
    <div>
      <Route component={App} />
      <Route component={Header} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  </Router>




  , document.getElementById('root'));
registerServiceWorker();
