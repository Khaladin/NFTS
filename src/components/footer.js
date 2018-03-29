import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="footer__copyright">
          Copyright National Fit Testing Services, LLC.
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <ul className="footer__list">
              <li className="footer__list__item">Home</li>
              <li className="footer__list__item">Company</li>
              <li className="footer__list__item">Services</li>
              <li className="footer__list__item">Contact Us</li>
              <li className="footer__list__item">Fit Testing</li>
              <li className="footer__list__item">Blog</li>
            </ul>
          </div>
          <div className="col-1-of-3">
            <ul className="footer__list">
              <li className="footer__list__social">LinkedIn</li>
              <li className="footer__list__social">Twitter</li>
              <li className="footer__list__social">Facebook</li>
              <li className="footer__list__social">Email</li>
              <li className="footer__list__social">Message</li>
            </ul>
          </div>
          <div className="col-1-of-3">
            <ul className="footer__list">
              <li className="footer__list__image-1"></li>
              <li className="footer__list__image-2"></li>
              <li className="footer__list__image-3"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
