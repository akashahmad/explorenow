import React from "react";
import { H, P , Img } from "@atoms";
import {featureImageWomen} from "@images"
const FeatureWithLead = () => {
  return (
    <>
      <div className="w-4/12 mt-12 pl-16 ">
        <div>
          <Img src={featureImageWomen} />
        </div>
        <H className="py-4">Paris Fashion Show Design</H> 
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
