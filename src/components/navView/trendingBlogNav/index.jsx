import React from "react";
import { trendingBlogNav } from "@images";
import { P } from "@atoms";
const TrendingNavBlog = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${trendingBlogNav})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "255px",
        }}
      >

      </div>
      <div className="w-10/12">
      <P className="text-white text-2xl pt-6 pb-4 ">
        Mauris elementum leo accumsan tempor magna
      </P>
      <P className="text-white text-base ">
        Nam ac elit a ante commodo tristique. lacus urna, condimentum a vehicula
        a, hendrerit ac nisi Lorem ipsum dolor sit amet, Nulla fringilla
        purusconsectetur adipiscing elit
      </P>
      </div>
    </>
  );
};

export default TrendingNavBlog;
