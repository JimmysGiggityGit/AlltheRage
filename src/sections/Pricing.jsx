import React from 'react';

import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

import {
  card,
  heading4,
  heading1,
  heading6,
  divider,
  plan,
} from './Pricing.module.scss';

const Pricing = ({ sectionStyles }) => {
  return (
    <section id="pricing" className={sectionStyles}>
      <SectionHeader
        header="OUR PRICING"
        description="With packages to suit your needs plus the flexibility and options to modify your experience."
      />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>Basic (Monday-Thursday)</h4>
              <h1 className={`${heading1} mb-2`}>$200/Hour</h1>
              <h6 className={`${heading6}`}>Two hour minimum</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  Destructables: <span>200 pieces</span>
                </p>
                <p>
                  Setup time: <span>1 hour</span>
                </p>
                <p>
                  Customization: <span>Call for details</span>
                </p>




                <Button styles="mt-4">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>Weekends</h4>
              <h1 className={`${heading1} mb-2`}>$400/hour</h1>
              <h6 className={`${heading6}`}>Two hour minimum</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  Destructables: <span>$400 pieces</span>
                </p>
                <p>
                  Setup time: <span>1.5-2 hours</span>
                </p>
                <p>
                  Customization: <span>Call for details</span>
                </p>

                <Button styles="mt-4">Book now</Button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>ultimate customized experience</h4>
              <h1 className={`${heading1} mb-2`}>Starting at $400/hour</h1>
              <h6 className={`${heading6}`}>Price based on customization, call for details</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  Destructables: <span>400 pieces + customized additions</span>
                </p>
                <p>
                  Setup time: <span>Two hours+</span>
                </p>

                <Button styles="mt-4">Call for details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
