import React from "react";
import {P, H} from '@atoms'

import { StaticImage } from "gatsby-plugin-image";

const LatestNews = () => {
  return (
    <>
      <H blue>Latest News</H>
      <div className="flex">
        <div className="rounded-full mr-5">
          <StaticImage src="../../assets/images/newsOne.png" alt="news" />
        </div>
        <div>
          <P small>Nam ac elit a ante commodo tristique. lacus urna condimentum </P>
          <P light>February 16,2020</P>
        </div>
      </div>
      <div className="flex pt-5">
        <div className="rounded-full mr-5">
          <StaticImage src="../../assets/images/newsTwo.png" alt="news" />
        </div>
        <div>
          <P small>Nam ac elit a ante commodo tristique. lacus urna condimentum </P>
          <P light>February 16,2020</P>
        </div>
      </div>
      <div className=" relative ">
      <div className= " absolute -right-20 transform -rotate-90 flex flex-row-reverse justify-center">
        <div className="font-chivo ">SCROLL DOWN</div>
        <div className="transform rotate-90 mr-3">
      <StaticImage src="../../assets/images/arrowDown.png" alt="arrowDown" />
      </div>
      </div> 
      </div>     
    </>
  );
};
export default LatestNews;
