import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { H, P } from "@atoms";
import { CarouselData } from "../../../carouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

const FeaturedCarousal = () => {
  const [slide, setSlide] = useState(CarouselData[1]);
  const [Thirdslide, setThirdSlide] = useState(CarouselData[2]);
  const slideChange = (index) => {
    if (index === CarouselData.length - 1) {
      setSlide(CarouselData[0]);
      setThirdSlide(CarouselData[1]);
    } else if (index === CarouselData.length - 2) {
      setSlide(CarouselData[CarouselData.length - 1]);
      setThirdSlide(CarouselData[0]);
    } else {
      setSlide(CarouselData[index + 1]);
      setThirdSlide(CarouselData[index + 2]);
    }
  };
  return (
    <>
      <Link to="/blog-detail/">
        <div>
          <H className="mb-6" HeadingMainBlue>
            REAL ESTATE
          </H>
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
              slideChange(e);
            }}
          >
            {CarouselData?.map((single, index) => (
              <div className="w-full">
                <div className=" text-left flex ">
                  <div className="w-3/4">
                    <div
                      className="w-full"
                      style={{
                        backgroundImage: `url(${single?.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        minHeight: "240px",
                      }}
                    ></div>
                  </div>
                  <div className=" py-2 pl-3 w-3/4">
                    <div className="py-3">
                      <H HeadingMainBlack>{single?.heading}</H>
                    </div>
                    <P extraSmall>{single?.description}</P>
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div className=" flex w-1/2 mt-6 text-left">
                    <div
                      className="w-1/2"
                      style={{
                        backgroundImage: `url(${slide?.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        minHeight: "160px",
                      }}
                    ></div>
                    <div className="pl-5">
                      <div className="py-3">
                        <H>{slide?.heading}</H>
                      </div>
                      <div>
                        <P extraSmall>{slide?.description}</P>
                      </div>
                    </div>
                  </div>
                  <div className=" w-1/2 relative">
                    <div className=" w-4/6 absolute -top-32 pl-12 text-left">
                      <div className="py-3">
                        <H> {Thirdslide?.heading}</H>
                      </div>
                      <div
                        className="w-full"
                        style={{
                          backgroundImage: `url(${Thirdslide?.url})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          width: "100%",
                          minHeight: "230px",
                        }}
                      ></div>
                      <div className="">
                        <P extraSmall>{Thirdslide?.description}</P>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Link>
    </>
  );
};
export default FeaturedCarousal;
