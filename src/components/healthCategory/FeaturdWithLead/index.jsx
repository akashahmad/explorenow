import React from "react";
import { H, P } from "@atoms";
import {featuredHealth} from "@images";
const FeatureWithLead = () => {
  return (
    <>
      <div className=" flex w-1/2 mt-6 ">
        <div className="w-full">
          <img src={featuredHealth} height="100%" width="100%"/>
        </div>
        <div className="pl-5">
        <div className="py-3">
          <H>Mauris elementum leo </H>
        </div>
        <div>
          <P extraSmall>
            Nam ac elit a ante commodo tristique. lacus urna, condimentum a
            vehicula a, hendrerit ac
          </P>
        </div>
        </div>
      </div>
    </>
  );
};

export default FeatureWithLead;
