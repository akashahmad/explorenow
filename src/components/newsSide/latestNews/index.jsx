import React from "react";
import { Link } from "gatsby";
import { P, H, Img } from "@atoms";
import {newsTwo , newsOne} from "@images";

const LatestNews = () => {
  return (
    <>
      <H blue>Latest News</H>
      <div className="flex">
        <div className="rounded-full mr-5">
          <Img src={newsOne} alt="news" />
        </div>
        <Link to="/news-detail/">
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
        </Link>
      </div>
      <div className="flex pt-5">
        <div className="rounded-full mr-5">
          <Img src={newsTwo} alt="news" />
        </div>
        <Link to="/news-detail/">
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
    </Link>
      </div>
       <div className="flex pt-5">
        <div className="rounded-full mr-5">
          <Img src={newsTwo} alt="news" />
        </div>
        <Link to="/news-detail/">
        <div>
          <P small>
            Nam ac elit a ante commodo tristique. lacus urna condimentum{" "}
          </P>
          <P light>February 16,2020</P>
        </div>
    </Link>
      </div> 
    </>
  );
};
export default LatestNews;
