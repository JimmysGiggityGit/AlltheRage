import React from "react";
import classes from "./SectionHeader.module.scss";
import Description from "./Description";

const SectionHeader = ({ header, description }) => {
  return (
    <>
      <h1 className={classes.header}>
        {header}
        <div className={classes.border} />
      </h1>
      <Description description={description} />
    </>
  );
};

export default SectionHeader;
