import React from 'react';
import {
  features,
  topColumn,
  imageContainer,
  list,
  item,
} from './Features.module.scss';

import { ReactComponent as Svg } from '../images/ragehammer.svg';

import Description from '../components/Description';
import Button from '../components/Button';

const Features = ({ sectionStyles }) => {
  return (
    <section id="features" className={`${features} ${sectionStyles}`}>
      <div className="container">
        <div className="row">
          <div className={`col-md ${topColumn}`}>
            <h3 className="heading mb-5">
              A mobile rage room experience!
            </h3>
            <Description>
              You can schedule your own rage room experience wherever you have the space. We bring everything you could possible want
              to smash, trash and destroy. There are no lines, you can schedule how long you want to have the room, and we bring a
              fixed number of items to destroy, we can also accommodate special requests (restrictions apply, call us for details).
            </Description>
            <ul className={`mt-5 mb-5 ${list}`}>
              <li className={item}>We put your safety first.</li>
              <li className={item}>
                We bring everything. We set it up, clean it up, and tear it down.
              </li>
              <li className={item}>
                Customized experiences or an all out melee, your choice.
              </li>
              <li className={item}>Check us out and see why we are the best in KC!</li>
            </ul>
            <Button>
              Learn More <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
          <div className="col-md">
            <div className={imageContainer}>
              <Svg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
