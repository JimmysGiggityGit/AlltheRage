import React from 'react';

import { bglayout, bgpattern } from './BgLayout.module.scss';

import bgImg from '../images/bg-pattern.png';

const bgLayout = () => {
  return (
    <>
      <div className={bglayout} />
      <div className={bgpattern}>
        <img src={bgImg} alt="pattern" />
      </div>
    </>
  );
};

export default bgLayout;
