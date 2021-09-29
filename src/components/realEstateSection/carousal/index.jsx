import React from "react";
import { H, P, Img } from "@atoms";
import {buildingImg} from "@images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

const FeaturedCarousal = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="mb-6">
          <H HeadingMainBlue>REAL ESTATE</H>
        </div>
        <Carousel
          animationHandler={"fade"}
          swipeable={false}
          axis={"horizontal"}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          stopOnHover={true}
          width={"100%"}
          interval={4000}
          showIndicators={false}
          showArrows={false}
        >
          <div className=" text-left flex ">
            <div className="w-3/4">
              <Img
                src={buildingImg}
                alt="HealthImage"
              />
            </div>
            <div className=" py-2 pl-3 w-3/4">
              <div className="py-3">
                <H HeadingMainBlack>Great Clothing Trending Design</H>
              </div>
              <P extraSmall>
                Nam ac elit a ante commodo tristique. lacus urna, condimentum a
                vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Nulla
                fringilla purusconsectetur adipiscing elit
              </P>
            </div>
          </div>
          <div className=" text-left flex ">
            <div className="w-3/4">
              <Img
                src={buildingImg}
                alt="HealthImage"
              />
            </div>
            <div className=" py-2 pl-3 w-3/4">
              <div className="py-3">
                <H HeadingMainBlack>Great Clothing Trending Design</H>
              </div>
              <P extraSmall>
                Nam ac elit a ante commodo tristique. lacus urna, condimentum a
                vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Nulla
                fringilla purusconsectetur adipiscing elit
              </P>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default FeaturedCarousal;
