import React from "react";
import { P, H } from "@atoms";
import {newsTwo , newsOne} from "@images";

const LatestNews = () => {
  return (
    <>
      <H blue>Latest News</H>
      <div className="flex">
        <div className="rounded-full mr-5">
          <img src={newsOne} alt="news" />
        </div>
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
      </div>
      <div className="flex pt-5">
        <div className="rounded-full mr-5">
          <img src={newsTwo} alt="news" />
        </div>
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
      </div>
       <div className="flex pt-5">
        <div className="rounded-full mr-5">
          <img src={newsTwo} alt="news" />
        </div>
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
      </div> 
    </>
  );
};
export default LatestNews;
