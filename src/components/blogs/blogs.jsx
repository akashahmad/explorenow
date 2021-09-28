// import { H } from '../atoms/heading'
import React from "react";
import { P, H , Img } from "@atoms";
import { fashon,clock,eye,chat } from "@images";
// import img from '../../assets/images'
const Blogs = () => {
  return (
    <>
      <div className="w-10/12">
        <div className="flex flex-wrap">
          {/* <div style={{backgroundImage: `url(${bg_fashon})`,minWidth:"260px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <H subHeading>
                Mauris elementum leo accumsan tempor magna elementum leo
                accumsan tempor magna
              </H>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <div className="py-2">
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                  accumsan tempor magna
                </H>
              </div>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <div className="py-2">
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                  accumsan tempor magna
                </H>
              </div>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <div className="py-2">
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                  accumsan tempor magna
                </H>
              </div>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <div className="py-2">
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                  accumsan tempor magna
                </H>
              </div>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 mt-4 fit-content">
            <div>
              <Img
                className="h-full"
                src={fashon}
              />
            </div>
            <div className="px-3 py-2">
              <H main_heading>FASHON</H>
              <div className="py-2">
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                  accumsan tempor magna
                </H>
              </div>
              <div className="font-futura text-xs flex py-2 items-center">
                <div className="mr-10"><P>February 16,2020</P></div>
                <P ml_3>Updated : 3 days Ago</P>
              </div>
              <div className="font-futura text-xs flex items-center inner-img">
                <Img className="w-5 opacity-50" src={clock} />
                <P ml_2>8 min read</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={chat}
                />
                <P ml_2>3</P>
                <Img
                  className="ml-5 w-5 opacity-50"
                  src={eye}
                  alt="eye"
                />
                <P ml_2>247</P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
