import React from 'react';

import { footer, payment } from './Footer.module.scss';



const Footer = () => {
  return (
    <footer className={footer}>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">All The Rage</h4>
            <ul>
              <li className="mb-2">
                <a href="/#">home</a>
              </li>
              <li>
                <a href="/#">contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">support</h4>
            <ul>
              <li className="mb-2">
                <a href="/#">support</a>
              </li>
              {/*<li className="mb-2">*/}
              {/*  <a href="/#">faq</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="/#">disscusion</a>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">subscribe to our newsletter</h4>
            <ul className="mb-4">
              <li>
                <a href="/#">
                  Sign up to get discounts and promotional pricing
                </a>
              </li>
            </ul>
            <form onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email" />
              <button type="submit">
                <i className="far fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`row ${payment}`}>
        <div className="col-md-6 col-sm-12">
          2022        All The Rage, a mobile rage room experience©
        </div>
        <div className="col-md-6 col-sm-12">
          {/*<img src={paymentImg} alt="payment" />*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
