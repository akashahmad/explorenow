import React from "react";
import FeaturedCarousal from "./carousal";
import FeatureWithLead from "./FeaturdWithLead";
const HealthCategory = () =>{
    return(
        <>
        <div className="w-8/12">
        <FeaturedCarousal/>
        <FeatureWithLead/>
        </div>
        </>
    )
}

export default HealthCategory;