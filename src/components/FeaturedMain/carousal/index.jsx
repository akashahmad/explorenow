import React from "react";
import { H, P } from "@atoms";
import {beautyTwo , featureImageWomen} from "@images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const FeaturedCarousal = () => {
  return (
    <>
      <div className=" w-full ">
        <div>
          <H HeadingMainBlue>FASHION</H>
        </div>
        <div className="h-full w-full">
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
            <div className=" flex justify-between ">
              <div className="text-left w-8/12 ">
                <div className=" py-4 ">
                  <H HeadingMainBlack>Paris Fashion Show Design</H>
                </div>
                <img
                  src={featureImageWomen}
                  alt="Women-with-bag"
                />
                <div className="pt-3">
                  <P small>
                    Nam ac elit a ante commodo tristique. lacus urna,
                    condimentum a vehicula a, hendrerit ac nisi Lorem ipsum
                    dolor sit amet, Nulla fringilla purusconsectetur adipiscing
                    elit
                  </P>
                </div>
              </div>

              <div className="text-left w-3/12">
                <img
                  src={beautyTwo}
                  alt="Women-with-bag"
                />
                <div className=" py-4 ">
                  <H>Paris Fashion Show Design</H>
                </div>
                <div className="pt-1">
                  <P small>
                    Nam ac elit a ante commodo tristique. lacus urna,
                    condimentum a vehicula a, hendrerit ac nisi Lorem ipsum
                    dolor sit amet, Nulla fringilla purusconsectetur adipiscing
                    elit
                  </P>
                </div>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="text-left w-8/12">
                <div className=" py-4 ">
                  <H HeadingMainBlack>Paris Fashion Show Design</H>
                </div>
                <img
                  src={beautyTwo}
                  alt="Women-with-bag"
                />
                <div className="pt-1">
                  <P small>
                    Nam ac elit a ante commodo tristique. lacus urna,
                    condimentum a vehicula a, hendrerit ac nisi Lorem ipsum
                    dolor sit amet, Nulla fringilla purusconsectetur adipiscing
                    elit
                  </P>
                </div>
              </div>

              <div className="text-left w-3/12">
                <div>
                  <img
                    src={featureImageWomen}
                    alt="Women-with-bag"
                  />
                </div>
                <div className=" py-4 ">
                  <H>Paris Fashion Show Design</H>
                </div>
                <div className="pt-1">
                  <P small>
                    Nam ac elit a ante commodo tristique. lacus urna,
                    condimentum a vehicula a, hendrerit ac nisi Lorem ipsum
                    dolor sit amet, Nulla fringilla purusconsectetur adipiscing
                    elit
                  </P>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default FeaturedCarousal;
