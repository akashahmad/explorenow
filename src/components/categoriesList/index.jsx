import React from "react";
import {H, Li} from "@atoms";
const CategoriesList = () => {
  return (
 
    <div className="w-1/8">
        <div className="pb-5">
        <H>By Categories</H>
        </div>
        <ul>
          <Li>Fashion</Li>
          <Li>Beauty</Li>
          <Li>Health</Li>
          <Li>Real Estate</Li>
        </ul>
      </div>
  );
};

export default CategoriesList;
