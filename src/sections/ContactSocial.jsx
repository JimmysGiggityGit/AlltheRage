import React from 'react';

import {
  contactSocial,
  socialBox,
  socialIcons,
  twitter,
  linkedin,
  google,
} from './ContactSocial.module.scss';

const ContactSocial = () => {
  return (
    <section className={` ${contactSocial}`}>
      <div className="container-md">
        <div className={socialBox}>
          <div className={socialIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={twitter}
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/james-dailey-84853678/"
              target="_blank"
              rel="noreferrer"
              className={linkedin}
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className={google}
            >
              <i className="fab fa-google-plus-g" />
            </a>

          </div>
          <p>
            <i className="fas fa-phone" /> 816-555-1234
          </p>
          <p>
            <i className="far fa-envelope-open" /> Support@alltherage.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
