import React from "react";
import {H, Li} from "@atoms";
const CategoriesList = () => {
  return (
 
    <div className="w-1/8">
      <nav>
        <H className="pb-5">By Categories</H>
        <ul>
          <Li>Fashion</Li>
          <Li>Beauty</Li>
          <Li>Health</Li>
          <Li>Real Estate</Li>
        </ul>
        </nav>
      </div>
  );
};

export default CategoriesList;
