import React from "react";
import Ads from "./ads";
import LatestNews from "./latestNews";
import ScrollDown from "../scrollDown";
import Footer from "../layout/footer"

const NewsSide = (props) => {
  return (
    <>
    <div className="w-1/4">
      <Ads />
      <LatestNews/>
      <ScrollDown scrollHandler={props?.scrollHandler} />
      <div className="pt-16">
      <Footer/>
      </div>
      </div>  
    </>
  );
};
export default NewsSide;
