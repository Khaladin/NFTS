import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="navigation">

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <Link to ="/contact"><li className="navigation__item">Contact Us</li></Link>
            <Link to ="/blog"><li className="navigation__item">Blog</li></Link>
            <Link to ="/fit-testing"><li className="navigation__item">Fit Testing</li></Link>
            <Link to ="/services"><li className="navigation__item">Services</li></Link>
            <Link to ="/company"><li className="navigation__item">Company</li></Link>
            <Link to ="/home"><li className="navigation__item">Home</li></Link>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
