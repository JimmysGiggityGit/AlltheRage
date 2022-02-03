import React from "react";

import {
  service,
  service__icon,
  service__title,
  service__description,
} from "./ServicesBox.module.scss";

const ServicesBox = ({ icon, title, description }) => {
  return (
    <div className={service}>
      <i className={`${service__icon} ${icon}`}></i>
      <h4 className={service__title}>{title}</h4>
      <p className={service__description}>{description}</p>
    </div>
  );
};

export default ServicesBox;
