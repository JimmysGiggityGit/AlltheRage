import React from 'react';
import { description, white } from './Description.module.scss';

const Description = props => {
  return (
    <p className={`${description} ${props.descriptionWhite ? white : ''}`}>
      {props.children ? props.children : props.description}
    </p>
  );
};

export default Description;
