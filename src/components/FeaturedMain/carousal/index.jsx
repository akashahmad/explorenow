import React from "react";
import { H, P } from "@atoms";
import { StaticImage } from "gatsby-plugin-image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const FeaturedCarousal = () => {

  return (
    <>
      <div className=" w-full ">
        <div>
          <H HeadingMainBlue>FASHION</H>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-easing="ease"
          className="h-full w-full"
        >
          <Carousel
            animationHandler={"fade"}
            swipeable ={false}
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
                <StaticImage
                  src="../../../assets/images/featureImageWomen.png"
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
                <StaticImage
                  src="../../../assets/images/beautyTwo.jpg"
                  alt="Women-with-bag"
                />
                <div className=" py-4 ">
                  <H >Paris Fashion Show Design</H>
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
                <StaticImage
                  src="../../../assets/images/beautyTwo.jpg"
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
                <StaticImage
                  src="../../../assets/images/featureImageWomen.png"
                  alt="Women-with-bag"
                />
                </div>
                <div className=" py-4 ">
                  <H >Paris Fashion Show Design</H>
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
