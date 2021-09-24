import React from "react";
import FeaturedCarousal from "./carousal";
import FeatureWithLead from "./FeaturdWithLead";
import SecondFeatured from "./secondFeatured";
const RealEstate = () => {
  return (
    <>
      <div className="w-8/12">
        <FeaturedCarousal />
        <div className=" flex justify-between">

            <FeatureWithLead />

            <SecondFeatured />
        </div>
      </div>
    </>
  );
};

export default RealEstate;
