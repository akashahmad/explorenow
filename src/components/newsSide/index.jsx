import React from "react";
import Ads from "./ads";
import LatestNews from "./latestNews";
import ScrollDown from "../scrollDown";

const NewsSide = () => {
  return (
    <>
    <div className="w-1/5">
      <Ads />
      <LatestNews/>
      <ScrollDown/>
      </div>  
    </>
  );
};
export default NewsSide;
