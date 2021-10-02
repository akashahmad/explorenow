import React from "react";
import { P, Img } from "@atoms";
import { arrowDown } from "@images";
const ScrollDown = ({scrollHandler}) => {
  return (
    <>
      <div className=" relative">
        <div className=" absolute -right-12 -top-24  transform -rotate-90 flex flex-row-reverse justify-center items-center cursor-pointer">
          <P light className="font-chivo">
            SCROLL DOWN
          </P>
          <div className="transform rotate-90 mr-3 " onClick={()=>{scrollHandler("down")}}>
            <Img src={arrowDown} alt="arrowDown" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ScrollDown;
