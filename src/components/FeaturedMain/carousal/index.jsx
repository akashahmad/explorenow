import React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import { H, P } from "@atoms";
import { CarouselData } from "../../../carouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

const FeaturedCarousal = () => {
  const [slide, setSlide] = useState(CarouselData[1]);
  const slideChange = (index) => {
    if (index === CarouselData.length - 1) {
      setTimeout(() => {
        setSlide(CarouselData[0]);
      }, 700);
    } else {
      setTimeout(() => {
        setSlide(CarouselData[index + 1]);
      }, 700);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Link to="/blog-detail/">
        <div className=" w-full">
          <H HeadingMainBlue>FASHION</H>
          <div className=" w-full">
            <div className=" flex justify-between ">
              <Carousel
                className="carousel-one w-8/12"
                animationHandler={"fade"}
                stopOnHover={false}
                swipeable={false}
                axis={"horizontal"}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={false}
                width={"100%"}
                interval={7000}
                showIndicators={false}
                showArrows={false}
                onChange={(e) => {
                  slideChange(e);
                }}
              >
                {CarouselData?.map((single, index) => (
                  <div className="text-left w-full" key={index}>
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
                    <P className="pt-3" small>
                      {single?.description}
                    </P>
                  </div>
                ))}
              </Carousel>
              <Carousel
                className="carousel-second w-3/12"
                animationHandler={"fade"}
                stopOnHover={false}
                swipeable={false}
                axis={"horizontal"}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={false}
                width={"100%"}
                interval={7000}
                showIndicators={false}
                showArrows={false}
              >
                {CarouselData?.map((single, index) => (
                  <div className="text-left w-full">
                    <div
                      className="w-full carousel-second"
                      style={{
                        backgroundImage: `url(${slide?.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        minHeight: "150px",
                      }}
                    ></div>
                    <H className=" py-4 ">{slide?.heading}</H>
                    <P small>{slide?.description}</P>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default FeaturedCarousal;
