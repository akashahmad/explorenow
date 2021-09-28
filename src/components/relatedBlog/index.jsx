import React from "react";
import { P, H, Img } from "@atoms";
import {newsTwo , newsOne} from "@images";

const RelatedBlog = () => {
  return (
    <>
      <H blue>Related Blogs</H>
      <div className="flex">
        <div className="rounded-full mr-5">
          <Img src={newsOne} alt="news" />
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
          <Img src={newsTwo} alt="news" />
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
          <Img src={newsTwo} alt="news" />
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
export default RelatedBlog;
