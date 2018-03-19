import React, { Component } from 'react';

class Company extends Component {
  render() {
    return(
      <div className="company">
        <div className="company__title">
          <h2 className="company__title">
            Our Compnay at a Glance
          </h2>
        </div>
        <div className="company__content">
          <p>
            Our overall purpose and goal is to understand our customer&#39s needs and
            objectives. Building a solid foundation is of primary importance. A thorough
            understanding of both state and federal regulations ensures respiratory compliance.
          </p>

          <p>
            Linda Lane, President and Owner, is a Registered Respiratory Therapist who began
            her career with 10 years as aDirector of Cardiology, Neurology and Pulmonology at
            a major medical facility in Kansas City, MO. She has spent close to the last 30
            years building two successful companies specializing in OSHA Compliance.
          </p>

          <p>
            Leslie Gossett is our National Sales Manager. Her Background includes a degree in
            Entrepreneurship, followed by ten years as a Fit Test Technician, 2 years Technical
            Training Manager, and 2 years National Sales Manager.
          </p>

          <p>
            Both women speak in conferences nationwide - look for them in regional and National
            events alike!
          </p>

          <p>
            Finally, where would any company be without their employees? While we can provide all
            services to all 50 states, our technicians are local to Missouri, Kansas, Nebraska,
            North Carolina, South Carolina, Georgia, Florida, Washington DC, Maryland, New York,
            Connecticut, New Jersey, California, Arkansas, Oklahoma and Texas.
          </p>
        </div>
      </div>
    );
  }
}

export default Company;
