import React from 'react';
import { header } from './Header.module.scss';

import Nav from '../components/Nav';
import HeadingDescription from '../components/HeadingDescription';
import BgLayout from '../components/BgLayout';
import backgroundImg from '../images/bg-home.jpg';

const Header = () => {
  return (
    <header
      id="home"
      className={header}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <BgLayout />
      <Nav />
      <HeadingDescription
        headingContent="Kansas City's only mobile Rage Room"
        description="We bring the action to your backyard, event space, festival, fund raiser, and more."
      />
    </header>
  );
};

export default Header;
