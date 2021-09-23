import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { H, P } from "@atoms";
const FeatureWithLead = () => {
  return (
    <>
      <div className=" flex ">
        <div data-sal="flip-left" data-sal-delay="1000" data-sal-easing="ease">
          <StaticImage src="../../../assets/images/featuredHealth.png" />
        </div>
        <div>
        <div className="py-4">
          <H>Mauris elementum leo accumsan tempor magna</H>
        </div>
        <div>
          <P>
            Nam ac elit a ante commodo tristique. lacus urna, condimentum a
            vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Nulla
            fringilla purusconsectetur adipiscing elit
          </P>
        </div>
        </div>
      </div>
    </>
  );
};

export default FeatureWithLead;
