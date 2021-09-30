import React from "react";
import { useState } from "react";
import { H, P } from "@atoms";
import { CarouselData } from "../../../carouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

const FeaturedCarousal = () => {
  const [slide, setSlide] = useState(CarouselData[1]);
  const slideChange = (index) => {
    if (index === CarouselData.length - 1) {
      setSlide(CarouselData[0]);
    } else {
      setSlide(CarouselData[index + 1]);
    }
  };

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
              slideChange(e);
            }}
          >
            {CarouselData?.map((single, index) => (
              <div className=" flex justify-between ">
                <div className="text-left w-8/12 " key={index}>
                  <div className=" py-4 ">
                    <H HeadingMainBlack>{single?.heading}</H>
                  </div>
                  <div
                    className="w-full"
                    style={{
                      backgroundImage: `url(${single?.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      minHeight: "350px",
                    }}
                  ></div>
                  <div className="pt-3">
                    <P small>{single?.description}</P>
                  </div>
                </div>

                <div className="text-left w-3/12">
                  <div
                    className="w-full"
                    style={{
                      backgroundImage: `url(${slide?.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      minHeight: "150px",
                    }}
                  ></div>
                  <div className=" py-4 ">
                    <H>{slide?.heading}</H>
                  </div>
                  <div className="pt-1">
                    <P small>{slide?.description}</P>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default FeaturedCarousal;
