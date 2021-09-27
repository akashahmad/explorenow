import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { H, P } from "@atoms";
const FeatureWithLead = () => {
  return (
    <>
      <div className="w-4/12 mt-12 ">
        <div>
          <StaticImage src="../../../assets/images/beautyImageHere.png" />
        </div>
        <div className="py-4">
          <H>Mauris elementum leo accumsan tempor magna</H>
        </div>
        <div>
          <P>
            Nam ac elit a ante commodo tristique. lacus urna, condimentum a
            vehicula a, hendrerit ac nisi Lorem ipsum
          </P>
        </div>
      </div>
    </>
  );
};

export default FeatureWithLead;
