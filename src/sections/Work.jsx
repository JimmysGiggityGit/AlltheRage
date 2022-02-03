import React from "react";

import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

import {
  work,
  boxContainer,
  box,
  boxIcon,
  leftArrow,
  rightArrow,
} from "./Work.module.scss";

const Work = ({ sectionStyles }) => {
  return (
    <section className={`${sectionStyles} ${work}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="How it works"
              description=""
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className={boxContainer}>
              <div className={box}>
                <i className="fas fa-pen-fancy" />
                <h4 className="mt-3 mb-3">Pick your package</h4>
                <p>There are three to choose from and all customizable.</p>
              </div>
              <div className={`${box} ${boxIcon}`}>
                <div className={leftArrow}>&#129122;</div>
                <div className={rightArrow}>&#129122;</div>
                <i className="far fa-address-card" />
                <h4 className="mt-3 mb-3">Choose your date</h4>
                <p>Spaces fill up quickly so schedule as soon as possible.</p>
              </div>
              <div className={box}>
                <i className="fas fa-bullseye" />
                <h4 className="mt-3 mb-3">Where do you want it?</h4>
                <p>We can accommodate most any flat surface, call us for a site visit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <Button>get started &#10132;</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
