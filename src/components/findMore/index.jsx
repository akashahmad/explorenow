import React from "react";
import { P } from "@atoms";
import { arrowBlue } from "@images";
const FindMore = () => {
  return (
    <div className="flex items-center mt-4">
      <div>
        <P light>Find More</P>
      </div>
      <div className="ml-2">
        <img src={arrowBlue} alt="arrow" />
      </div>
    </div>
  );
};

export default FindMore;
