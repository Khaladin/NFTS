import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
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
    );
  }
}

export default Header;
