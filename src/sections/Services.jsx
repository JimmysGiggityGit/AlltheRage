import React from 'react';

import SectionHeader from '../components/SectionHeader';
import ServicesBox from '../components/ServicesBox';

const Services = ({ sectionStyles }) => {
  return (
    <section id="services" className={`${sectionStyles}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <SectionHeader
              header="Rage Room Features"
              description="What we bring and what you can expect."
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-house-damage"
              title="The Rage Room"
              description="We bring our specially designed 20x10' tent which includes two sides for more rage and less waiting."
            />
          </div>
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-glass-martini"
              title="What you'll be smashing."
              description="We bring 200 plates, bottles, and other items to destroy. Certain arrangements can be made
              for you to provide your own items. EPA regulations and disposal fees apply, ask for details."
            />
          </div>
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-trash"
              title="Setup and removal"
              description="We arrive early to set up your room and stay late to make sure everyone at your function has broken every last
              item, and then tear down, setup and breakdown are included, you won't have time taken off your experience."
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-heart"
              title="Safety is our priority."
              description="We bring full body suits with gloves, slip on shoe covers, helmets with face shields, and all are included in the price. All of our safety
              measures are properly cleansed with Covid protocols in mind."
            />
          </div>
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-hammer"
              title="We bring the tools for destruction."
              description="We have baseball bats, hammers, sledge hammers, and practically whatever you want us to bring
              to make your experience a smashing one."
            />
          </div>
          <div className="col-md mt-3">
            <ServicesBox
              icon="fas fa-wrench"
              title="Easy to customize"
              description="We have many options to create a tailored event. We have our standard packages, and with enough notice
              we can customize your rage experience."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
