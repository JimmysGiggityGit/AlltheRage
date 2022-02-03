import React from "react";
import { btn, curved, white } from "./Button.module.scss";

const Button = ({ children, iswhite, isCurved, styles, ...rest }) => {
  return (
    <button
      className={`${btn} ${iswhite ? white : ""} ${isCurved ? curved : ""} ${
        styles ? styles : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
