import React from "react";
import { H, P } from "@atoms";
import {featureImageWomen} from "@images"
const FeatureWithLead = () => {
  return (
    <>
      <div className="w-4/12 mt-12 pl-16 ">
        <div className="" data-sal="flip-left" data-sal-delay="1000" data-sal-easing="ease">
          <StaticImage src={featureImageWomen} />
        </div>
        <div className="py-4">
          <H>Paris Fashion Show Design</H>
        </div>
        <div>
          <P>
            Nam ac elit a ante commodo tristique. lacus urna, condimentum a
            vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Nulla
            fringilla purusconsectetur adipiscing elit
          </P>
        </div>
      </div>
    </>
  );
};

export default FeatureWithLead;
