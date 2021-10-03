import React from "react";
import { Link } from "gatsby";
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
      <Link to="/blog-detail/">
        <div>
          <H HeadingMainBlue>BEAUTY</H>
          <div className=" flex justify-between">
            <Carousel
              className=" beauty-carousel w-6/12"
              animationHandler={"fade"}
              swipeable={false}
              axis={"horizontal"}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              useKeyboardArrows={false}
              stopOnHover={false}
              width={"100%"}
              interval={8000}
              showIndicators={false}
              showArrows={false}
            >
              {CarouselData?.map((single, index) => (
                <div className=" w-full text-left">
                  <H className=" py-2 " HeadingMainBlack>
                    {single?.heading}
                  </H>
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
              ))}
            </Carousel>
            <Carousel
              className=" beauty-carouseltwo w-4/12"
              animationHandler={"fade"}
              swipeable={true}
              axis={"horizontal"}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              useKeyboardArrows={false}
              stopOnHover={false}
              width={"100%"}
              interval={8000}
              showIndicators={false}
              showArrows={false}
              onChange={(e) => {
                slideChange(e);
              }}
            >
              {CarouselData?.map((single, index) => (
                <div className="w-full mt-12 text-left ">
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
                  <div>
                    <H className="py-4 cursor-pointer">{slide?.heading}</H>
                    <P>{slide?.description}</P>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Link>
    </>
  );
};
export default FeaturedCarousal;
