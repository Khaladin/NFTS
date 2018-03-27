import React, { Component } from 'react';

class Services extends Component {
  render() {
    return(
      <div className="services">
        <div>
          <h2 className="services__title">Services We Offer</h2>
        </div>
        <ul className="services__list">
          <li className="services__list__item">
            <h3 className="services__list__item__title">OSHA Written Respiratory Protection Program</h3>
            <p className="services__list__item__content">Requires any facility that provides respirators to their employees
              to develop and maintain a written policy and procedure specific to each workplace, documenting respirator
              use practices.  National Fit Testing Services will work with your company"'"s designated Program Administrator
              to develop a policy and procedure document to satisfy this requirement.
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Online Medical Evaluations</h3>
            <p className="services__list__item__content">
              Prior to wearing a respirator in the workplace, employees must be medically cleared.
              Our Online Medical Evaluation enables employees to log-on at their convenience and complete
              a questionnaire with full confidentiality.  Questionnaires are reviewed by a Board-Certified
              Occupational Health Physician.  Once complete, results are sent back to the Program Administrator
              while their personal health information remains private.  Log-on for your company never expires
              and will remain available for new hires.
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Qualitative Fit Testing and Training (QLFT)</h3>
            <p className="services__list__item__content">
              QLFT is a pass/fail fit test which assesses the adequacy of respirator fit based on the individual"'"s
              response to test media.  This test may be used for all tight fitting, negative pressure face pieces
              which will be used in atmospheres up to 10 times the OSHA PEL.  As part of conducting the fit test,
              technicians will instruct wearers on all training points, such as donning/doffing, maintenance/storage,
              etc.  QLFT is  conducted using 3M™ or Gerson® Fit Test Kits, with the test agent Saccharin or Bitrex™
              Solution Aerosol.
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Quantitative Fit Testing and Training (QNFT)</h3>
            <p className="services__list__item__content">
              A QNFT is an assessment of the adequacy of respirator fit by numerically measuring the
              amount of leakage into the respirator.  A QNFT is required for all negative pressure
              full-face and half-face respirators that are to be used in atmospheres greater than 10
              times the OSHA Permissive Exposure Limit (PEL).  Our standard QNFT Method uses an Ambient
              Aerosol Condensation Nuclei Counter [TSI Portacount™].  A Fit Factor of >500 will be
              considered a pass for full-face piece respirators unless you prefer a higher minimum number. ​​
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Record-Keeping/Reporting</h3>
            <p className="services__list__item__content">
            OSHA requires that employers keep written documentation of all employees who are
            fit tested and trained with written records on the day of testing.  We also provide
            optional wallet cards.
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Train the Trainer</h3>
            <p className="services__list__item__content">
              If it is your goal to fit test and train internally; National Fit Testing
              Services will conduct training courses for your designated employees onsite
              or online.
            </p>
          </li>
          <li className="services__list__item">
            <h3 className="services__list__item__title">Program Auditing</h3>
            <p className="services__list__item__content">
              OSHA Respiratory Protection Standard 29 CFR 1910.134 requires annual review
              and auditing of your program.  National Fit Testing Services will conduct this
              audit and assure your compliance.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Services;
