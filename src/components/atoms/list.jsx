import React from "react";

export const Li = (props) => {
  return (
    <li
      className={`cursor-pointer ${
        !props?.active &&
        !props.nonActive &&
        "text-base font-semibold opacity-60 my-2"
      } ${
        props?.active
          ? "Active text-xl font-bold light-blue mr-3 opacity-100 "
          : ""
      } ${props?.nonActive ? "font-dark-gray mr-3 text-xl font-bold " : ""}
      ${props?.className}`}
    >
      {props.children}
    </li>
  );
};
