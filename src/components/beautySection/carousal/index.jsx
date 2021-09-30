import React from "react";
import { useState } from "react";
import { H, P } from "@atoms";
import { CarouselData } from "../../../carouselData";
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
      <div className="w-3/5">
        <div>
          <H HeadingMainBlue>BEAUTY</H>
        </div>
        <div className="h-full">
          {" "}
          <Carousel
            animationHandler = {"fade"}
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
            onChange={(e) => {
              slideChange(e);
            }}
          >
            {CarouselData?.map((single, index) => (
              <div className=" flex justify-between ">
                <div className=" w-6/12 text-left">
                  <div className=" py-2 ">
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
                      minHeight: "400px",
                    }}
                  ></div>
                </div>
                <div className="w-4/12 mt-12  text-left ">
                  <div
                    className="w-full"
                    style={{
                      backgroundImage: `url(${slide?.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      minHeight: "280px",
                    }}
                  ></div>
                  <div className="py-4">
                    <H>{slide?.heading}</H>
                  </div>
                  <div>
                    <P>{slide?.description}</P>
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
