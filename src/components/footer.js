import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaMail from 'react-icons/lib/fa/envelope-square';
import { Share } from 'react-twitter-widgets';

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
              <Link to="/home"><li className="footer__list__item">Home</li></Link>
              <Link to="/company"><li className="footer__list__item">Company</li></Link>
              <Link to="/services"><li className="footer__list__item">Services</li></Link>
              <Link to="/contact"><li className="footer__list__item">Contact Us</li></Link>
              <Link to="/fit-testing"><li className="footer__list__item">Fit Testing</li></Link>
              <Link to="/blog"><li className="footer__list__item">Blog</li></Link>
            </ul>
          </div>
          <div className="col-1-of-3">
            <ul className="footer__list">
              <li className="footer__list__social"><a href="https://www.linkedin.com/company/15318585/"><FaLinkedIn /></a></li>
              <li className="footer__list__social twitter-widg">
                <Share
                  url="https://www.nationalfittestservices.com/"
                />
              </li>
              <li className="footer__list__social"><FaFacebook /></li>
              <li className="footer__list__social"><FaMail /></li>
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
