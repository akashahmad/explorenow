import React from "react";

export const H = (props) => {
  return (
    <h1
      className={` ${" font-semibold leading-none "} ${
        props?.blue ? " text-blue-400 font-normal py-5" : ""
      }${props?.main_heading ? " text-xl font-bold light-blue " : ""} 
      ${props?.subHeading ? " font-bold light-blue py-2" : " py-2"}
      ${props?.HeadingMainBlue ? " text-3xl light-blue " : " "}
      ${props?.HeadingMainBlack ? " text-3xl " : " "} 
      `}
    >
      {props.children}
    </h1>
  );
};
