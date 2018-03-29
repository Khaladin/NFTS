import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.css';

import App from './App';
import Header from './components/header';
import Home from './components/home';
import Company from './components/company';
import Services from './components/services';
import FitTesting from './components/fit-testing';
import Footer from './components/footer';


ReactDOM.render(
  <Router>
    <div>
      <Route component={App} />
      <Route component={Header} />
      <Switch>
        <Route path='/fit-testing' component={FitTesting} />
        <Route path='/services' component={Services} />
        <Route path='/company' component={Company} />
        <Route path='/' component={Home} />
      </Switch>
      <Route component={Footer} />
    </div>
  </Router>




  , document.getElementById('root'));
registerServiceWorker();
