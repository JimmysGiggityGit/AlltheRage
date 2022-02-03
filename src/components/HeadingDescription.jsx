import React from 'react';

import { container, heading } from './HeadingDescription.module.scss';

import Description from './Description';

const HeadingDescription = ({
  headingContent,
  description,
  Button,
  descriptionWhite,
}) => {
  return (
    <div className={container}>
      <h1 className={heading}>{headingContent}</h1>
      <Description descriptionWhite>{description}</Description>
      {Button ? <Button /> : null}
    </div>
  );
};

export default HeadingDescription;
