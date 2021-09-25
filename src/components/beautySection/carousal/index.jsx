import React from "react";
import { H } from "@atoms";
import { StaticImage } from "gatsby-plugin-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedCarousal = () => {
  return (
    <>
      <div className=" w-6/12 ">
        <div>
          <H HeadingMainBlue>BEAUTY</H>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-easing="ease"
          className="h-full"
        >
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
            <div className="text-left">
              <div className=" py-2 ">
                <H HeadingMainBlack>Great Clothing Trending Design</H>
              </div>
              <StaticImage
                src="../../../assets/images/BeautyMain.png"
                alt="beautyImage"
              />
            </div>
            <div className="text-left">
              <div className=" py-2 ">
                <H HeadingMainBlack>Great Clothing Trending Design</H>
              </div>
              <StaticImage
                src="../../../assets/images/BeautyMain.png"
                alt="beautyImage"
              />
            </div>
            <div className="text-left">
              <div className=" py-2 ">
                <H HeadingMainBlack>Great Clothing Trending Design</H>
              </div>
              <StaticImage
                src="../../../assets/images/BeautyMain.png"
                alt="beautyImage"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default FeaturedCarousal;
