import React from "react";

export const Img = (props) => {
  return <img className={props?.className} src={props.src} alt={props?.alt} height={props?.height} width={props?.width}/>;
};
