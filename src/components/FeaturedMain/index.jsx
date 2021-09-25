import React from "react";
import FeaturedCarousal from "./carousal";
// import FeatureWithLead from "./FeaturdWithLead";
const FeaturedMain = () =>{
    return(
        <>
        <div className="w-3/5 flex justify-between">
        <FeaturedCarousal/>
        {/* <FeatureWithLead/> */}
        </div>
        </>
    )
}

export default FeaturedMain;
