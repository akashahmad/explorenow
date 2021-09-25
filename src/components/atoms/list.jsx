import React from "react";

export const Li = (props) => {
  return (
    <li className={`${"text-base font-semibold opacity-60 py-1 "} ${props.active ? " Active text-xl font-bold light-blue mr-3 opacity-100 " : " font-dark-gray"} ${props.nonActive ? " font-dark-gray mr-3 text-xl font-bold" : " "}`}>{props.children}</li>
  );
};

