import React from "react";

export const P = (props) => {
  return (
    <p className={`black  leading-none ${props?.light? "font-futura text-gray-900 opacity-70" : ""} ${props?.small? "text-sm": ""} ${props.ml_3 ? "ml-5 font-futura ":" font-futura"} ${props.ml_2 ? " ml-2 font-futura" : " font-futura"}` }>{props.children}</p>
  );
};


