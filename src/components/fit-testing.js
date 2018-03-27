import React, { Component } from 'react';

class FitTesting extends Component {
  render() {
    return(
      <div className="fit-testing">
        <div>
          <h2 className="fit-testing__title">Fit Testing</h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="fit-testing__card">
              <div className="fit-testing__card__title-qlft">
                <span>Qualitative Fit Test (QLFT)</span>
              </div>
              <div className="fit-testing__card__content">
                <span>
                  A QLFT is a pass/fail fit test which assesses the adequacy of respirator
                  fit based on the individuals response to a test media.  A QLFT may be used
                  for all tight fitting, negative pressure face-pieces which will be used in
                  atmospheres up to 10 times for the OSHA PEL.  As part of conducting the fit
                  test, technicians will train employees as listed below.  QLFT is conducted
                  using 3M™ or Gerson® Fit Test Kits, and the test agent Saccharin Solution
                  Aerosol or Bitrex™ Solution Aerosol.
                </span>
              </div>
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="fit-testing__card">
              <div className="fit-testing__card__title-qnft">
                <span>Quantitative Fit Test (QNFT)</span>
              </div>
              <div className="fit-testing__card__content">
                <span>
                  A QNFT is an assessment of the adequacy of fit by numerically measuring
                  the amount of leakage into the respirator.  A QNFT is required for all
                  negative pressure full-face and half-face respirators that are to be used
                  in atmospheres greater than 10 times the OSHA PEL.  Our standard QNFT method
                  uses an Ambient Aerosol Condensation Nuclei Counter (TSI PORTACOUNT™).  A
                  fit factor of >500 will be considered a pass for full face piece respirators
                  unless you prefer a higher minimum number.  As part of conducting the fit test,
                  technicians will train employees as listed below.
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="fit-testing__card">
              <div className="fit-testing__card__title">
                <span>Key Conditions</span>
              </div>

              <ul className="fit-testing__list">
                <li className="fit-testing__list__item-conditions">
                  All employees to be fit tested must be clean shaven, mustaches are ok
                  as long as they do not interfere with the valves
                </li>
                <li className="fit-testing__list__item-conditions">
                  All fit testing equipment and supplies, other than the respirators, are
                  provided by National Fit Testing Services
                </li>
                <li className="fit-testing__list__item-conditions">
                  Primary and back-up respirators must be in stock for fit testing and
                  provided by the customer
                </li>
                <li className="fit-testing__list__item-conditions">
                  Respirator medical evaluations must be completed prior to fit testing
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="fit-testing__card">
              <div className="fit-testing__card__title">
                <span>Training</span>
              </div>

              <ul className="fit-testing__list">
                <li className="fit-testing__list__item-training">
                  Why the respirator is necessary and how improper fit, usage, or
                  maintencance can compromise the protective effect of the respirator
                </li>
                <li className="fit-testing__list__item-training">
                  What the limitations and capabilities are of the respirator
                </li>
                <li className="fit-testing__list__item-training">
                  How to use the respirator effectively in emergency situations, including
                  situations in which the respirator malfunctions
                </li>
                <li className="fit-testing__list__item-training">
                  Inspection
                </li>
                <li className="fit-testing__list__item-training">
                  Donning and Doffing
                </li>
                <li className="fit-testing__list__item-training">
                  User Seal Check
                </li>
                <li className="fit-testing__list__item-training">
                  maintenance and storage of the respirator
                </li>
                <li className="fit-testing__list__item-training">
                  How to recognize medical signs and symptoms that may limit or prevent
                  the effective use of the respirators
                </li>
                <li className="fit-testing__list__item-training">
                  Any additional policies and procedures specific to your organization
                </li>
                <li className="fit-testing__list__item-training">
                  Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FitTesting;
