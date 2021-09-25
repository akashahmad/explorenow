import React from "react";

export const H = (props) => {
  return (
    <h1
      className={`text-xl  leading-none ${
        props?.blue ? "text-blue-400 font-normal py-5 " : ""
      }${props?.HeadingMainBlue ? "text-3xl light-blue font-semibold " : ""}
      ${props?.HeadingMainBlack ? "text-3xl " : ""} `}
    >
      {props.children}
    </h1>
  );
};
