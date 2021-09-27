import React from "react";
import { P } from "@atoms"
import {arrowDown} from "@images"
const ScrollDown = () =>{
    return (
        <>
         <div className=" relative ">
        <div className=" absolute -right-16  transform -rotate-90 flex flex-row-reverse justify-center items-center cursor-pointer">
          <P light className="font-chivo">SCROLL DOWN</P>
          <div className="transform rotate-90 mr-3 ">
            <img
              src={arrowDown}
              alt="arrowDown"
            />
          </div>
        </div>
      </div>
        </>
    )
}
export default ScrollDown;