import React from "react";
import Ads from "./ads";
import LatestNews from "./latestNews";
import ScrollDown from "../scrollDown";

const NewsSide = (props) => {
  return (
    <>
    <div className="w-1/4">
      <Ads />
      <LatestNews/>
      <ScrollDown scrollHandler={props?.scrollHandler} />
      </div>  
    </>
  );
};
export default NewsSide;
