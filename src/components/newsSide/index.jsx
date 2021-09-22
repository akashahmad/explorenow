import React from "react";
import Ads from "./ads";
import LatestNews from "./latestNews";
const NewsSide = () => {
  return (
    <>
    <div className="w-1/5">
      <Ads />
      <LatestNews/>
      </div>  
    </>
  );
};
export default NewsSide;
