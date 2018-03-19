import React, { Component }  from 'react';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="home__banner">
          <h3>Specializing in Respiratory Protection Programs in Compliance <a>with OSHA
          Respiratory Protection Standard 29 CFR 1910.134</a>
          </h3>
        </div>
        <div className="row">

          <div className="col-1-of-2">
            <div className="home__info-box">
              <div>
                <h3 className="home__info-box__sub-title-services">Services</h3>
              </div>

              <div className="home__info-box__content">
                <ul>
                  <li className="home__list-left">Train the Trainer</li>
                  <li className="home__list-left">Written Respiratory Protection Program</li>
                  <li className="home__list-left">Online Medical Evaluations</li>
                  <li className="home__list-left">Qualitative Fit Testing and Training (QLFT)</li>
                  <li className="home__list-left">Quantitative Fit Testing and Training (QNFT)</li>
                  <li className="home__list-left">Record Keeping</li>
                  <li className="home__list-left">Reporting</li>
                  <li className="home__list-left">Program Auditing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="home__info-box">
              <div>
                <h3 className="home__info-box__sub-title-benefits">Key Benefits</h3>
              </div>

              <div className="home__info-box__content">
                <ul>
                  <li className="home__list-right">Certified WBE ownded and operated by a Registered Respiratory Therapist</li>
                  <li className="home__list-right">Efficient, economical alternative to Do-it-Yourself testing and training</li>
                  <li className="home__list-right">Assures regulatory compliance</li>
                  <li className="home__list-right">Consistency and Standardization</li>
                  <li className="home__list-right">Eliminates Conflict of Interest</li>
                  <li className="home__list-right">Minimizes Liability</li>
                  <li className="home__list-right">
                    Our experience and dedication allows us to provide our clients with the most
                    cost effective and consistent compliance solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Home;
