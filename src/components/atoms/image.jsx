import React from "react";
import { MainImage } from 'gatsby-plugin-image'

export const Img = (props) => {
  return <MainImage className={props?.className} loading="lazy" src={props.src} alt={props?.alt} height={props?.height} width={props?.width}/>;
};
