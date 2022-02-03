import React from "react";

import HeadingDescription from "../components/HeadingDescription";
import BgLayout from "../components/BgLayout";
import Button from "../components/Button";

import { webdesc } from "./WebDesc.module.scss";

const WebDesc = () => {
  return (
    <section
      className={webdesc}
      style={{ backgroundImage: 'url("/images/coworkers.jpg")' }}
    >
      <BgLayout />
      <HeadingDescription
        headingContent="Schedule your rage experience today!"
        description="Just click on the date you want and we will do the rest."
        Button={() => <Button iswhite>Get the Rage!</Button>}
      />
    </section>
  );
};

export default WebDesc;
