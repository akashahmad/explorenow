import React from "react";
import { H, P , Img } from "@atoms";
const FeatureWithLead = () => {
  return (
    <>
      <div className="w-4/12 mt-12 ">
        <div>
          <Img src="../../../assets/images/beautyImageHere.png" />
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
