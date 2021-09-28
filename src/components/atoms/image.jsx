import React from "react";

export const Img = (props) => {
  return <img  src={props.src} alt={props?.alt} height={props?.height} width={props?.width}/>;
};
