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
import ScrollToTopRoute from './components/scrollToTopRoute.js';
import Contact from './components/contact';


ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div>
      <Route component={App} />
      <Route component={Header} />
      <Switch>
        <ScrollToTopRoute path='/fit-testing' component={FitTesting} />
        <ScrollToTopRoute path='/services' component={Services} />
        <ScrollToTopRoute path='/company' component={Company} />
        <ScrollToTopRoute path='/contact' component={Contact} />
        <ScrollToTopRoute path='/' component={Home} />
      </Switch>
      <Route component={Footer} />
    </div>
  </Router>




  , document.getElementById('root'));
registerServiceWorker();
