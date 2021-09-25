import React from "react";
import { H, P } from "@atoms";
import { StaticImage } from "gatsby-plugin-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedCarousal = () => {
  return (
    <>
      <div
        data-sal="zoom-in"
        data-sal-delay="600"
        data-sal-easing="ease"
        className=" overflow-hidden"
      >
        <div className="mb-6">
          <H HeadingMainBlue>HEALTH</H>
        </div>
        <Carousel
          axis={"horizontal"}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          stopOnHover={true}
          width={"100%"}
          interval={4000}
          swipeable={true}
          showIndicators={false}
          showArrows={false}
        >
          <div className=" text-left flex ">
            <div className="w-3/4">
              <StaticImage
                src="../../../assets/images/healthMain.png"
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
              <StaticImage
                src="../../../assets/images/healthMain.png"
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
