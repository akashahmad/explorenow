import React from "react";

export const P = (props) => {
  return (
    <p className={`black  leading-none ${props?.light? "font-futura text-gray-900 opacity-70" : ""} ${props?.small? "text-sm": ""}` }>{props.children}</p>
  );
};


