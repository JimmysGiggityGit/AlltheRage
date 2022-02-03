import React from 'react';

import { box } from './Testimonial.module.scss';

import SectionHeader from '../components/SectionHeader';

import testimonialImg1 from '../images/ben-parker.jpg';
import testimonialImg2 from '../images/brooke-cagle.jpg';
import testimonialImg3 from '../images/vicky-hladynets.jpg';

const Testimonial = ({ sectionStyles }) => {
  return (
    <section className={sectionStyles}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="WHAT THEY'VE SAID"
              description="Have a look at what these raging people have to say..."

            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src={testimonialImg1} alt="ben parker" />
              <p>
                "I was feeling like a little boy, all pout-y because the liquor store only had Mickeys in 24 packs
                and I dont want that many, so I got mad and peed on the floor. Then the police came and arrested me. When I
                got out of jail I went and ordered a rage room for myself and had them set it up in the trailer park. I
                beat the hell out of my ex-wife's leftover furniture, felt so good I had to go get more Mickeys, but only a six-pack."
              </p>
              <h5>
                Kipp Woodcock - <span>Lenexa</span>
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src={testimonialImg2} alt="brooke cagle" />
              <p>
                "I never thought of myself as a destructive or violent person, but once I got suited up and started
                swinging it took three people to wrestle me out of there. I smashed everything I could, and the whole time
                I was thinking of my boss, my ex-boyfriend, the neighbors, everyone who's p****d me off. I felt wonderful afterwards."
              </p>
              <h5>
                {' '}
                Brooke Smearson- <span>Lee's Summit</span>
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src={testimonialImg3} alt="vicky hladynets" />
              <p>
                "I've learned that people will forget what you said, people will
                forget what you did, but people will never forget how you made
                them feel, and the rage room experience was no different. Except, some of the things I said about my co-workers
                while I was smashing plates that I wrote their names on, I may have keep hitting the broken plates well after
                they were broken, I dont remember. All I know is that nobody in the office, except for the creepy mail person, will talk to me. Overall
                it was worth it 10/10"
              </p>
              <h5>
                Vicky Prodopolisky - <span>Kansas City</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
