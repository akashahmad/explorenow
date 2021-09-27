import React from "react";
import {buildingFeature} from "@images";
import { H, P } from "@atoms";

const SecondFeatured = () => {
  return (
    <>
      <div className=" w-1/2 relative -top-40 pl-16 ">   
        <div className=" w-4/6 ">
        <div className="py-3">
        <H> Mauris elementum leo </H>
        </div>
        <div>
        <img src={buildingFeature} alt="yogaGirl" />
        </div>
        <div className="py-2">
        <P extraSmall>
          Nam ac elit a ante commodo tristique. lacus urna
        </P>
        </div>
      </div>
      </div>

    </>
  );
};
export default SecondFeatured;
