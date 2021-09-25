import React from "react";
import FeaturedCarousal from "./carousal";
import FeatureWithLead from "./FeaturdWithLead";
const BeautyCategory = () =>{
    return(
        <>
        <div className="w-3/5 flex justify-evenly ">
        <FeaturedCarousal/>
        <FeatureWithLead/>
        </div>
        </>
    )
}

export default BeautyCategory;