import React, { Component } from 'react';
import { Formio } from 'react-formio';

class Contact extends Component {
  render() {
    return(
      <div className="contact">
        <div className="row">
          <div className="col-1-of-2 not-form">
            <div className="contact__info">
              We require emloyers to inquire about services for their employees
              as we do not work on an individual basis
            </div>
            <div className="contact__thanks">Thank you for your interest in NFTS!</div>
          </div>
          <div className="col-1-of-2 form">
            <Formio src ="https://hzuurorhjtphacr.form.io/contact" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
