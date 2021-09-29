import React from "react";
import { H, P } from "@atoms";
import { beautyTwo, featureImageWomen } from "@images";
import { CarouselData } from "../../../carouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel";

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
            interval={6000}
            showIndicators={false}
            showArrows={false}
            onChange={(e) => {
              console.log("event", e);
            }}
          >
            <div className=" flex justify-between ">
              {CarouselData?.map((single, index) => (
                <div className="text-left w-8/12 " key={index}>
                  <div className=" py-4 ">
                    <H HeadingMainBlack>{single?.heading}</H>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${single?.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <div className="pt-3">
                    <P small>{single?.description}</P>
                  </div>
                </div>
              ))}

              <div className="text-left w-3/12">
                <div
                  style={{
                    backgroundImage: `url(${beautyTwo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "150px",
                  }}
                ></div>
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
