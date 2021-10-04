import React from "react";
import { H, P, Img } from "@atoms";
import { useState , useEffect } from "react";
import { paperPlane, smallCross } from "@images";
const NewsletterFull = () => {
  const [showNewsLetter, setShowNewsLetter] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setShowNewsLetter(true);
    }, 7000);
  },[])


  return (
    <>
      {showNewsLetter && (
        <div className=" absolute inset-0 z-30">
          <form className="flex justify-center items-center bg-black absolute inset-0 ">
            <div className="py-12 px-3 bg-offwhite flex justify-center items-center text-center w-1/3 ">
              <div>
                <div
                  className=" flex justify-end w-11/12"
                  onClick={() => {
                    setShowNewsLetter(false);
                  }}
                >
                  <Img
                    className="cursor-pointer"
                    src={smallCross}
                    alt="cross"
                  />
                </div>
                <H HeadingMainBlack>Join Newsletter</H>
                <P large className="py-6 px-16">
                  Enter your email and we'll keep you posted with news and
                  updates!
                </P>
                <div>
                  <div className=" relative w-3/4 mx-auto">
                    <input
                      className="py-3 pl-4 pr-12 w-full outline-none"
                      type="email"
                      placeholder="Email"
                    />
                    <Img
                      className=" absolute right-3 top-3 cursor-pointer"
                      src={paperPlane}
                      alt="paperPlane"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewsletterFull;
