import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="navigation">

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">Contact Us</li>
            <li className="navigation__item">Blog</li>
            <li className="navigation__item">Fit Testing</li>
            <li className="navigation__item">Services</li>
            <li className="navigation__item">Company</li>
            <li className="navigation__item">Home</li>
          </ul>
        </nav>

        <div className="header">
          <div className="header__text-box">
            <h1 className="header__text-box__title">National Fit Testing<br />Services</h1>
            <h3 className="header__text-box__mission">
            Providing Solutions to Businesses in all 50 States
            </h3>
            <p className="header__text-box__about">
              National Fit Testing Services&#39; experience and dedication provides our
              clients the most cost effective and consistent compliance solutions
            </p>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
