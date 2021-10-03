import React from "react";
import { Img, Li, P, H } from "@atoms";
import { crossIcon } from "@images";
import { useState } from "react";
import SocialIcon from "../socialIcon";
import TrendingNavBlog from "./trendingBlogNav";
const NavView = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <>
      {navShow && (
        <div className=" nav-view bg-light-blue h-screen absolute inset-0 z-50">
          <div className="container mx-auto">
            <Img
              className="ml-8 pt-8 cursor-pointer h-14"
              src={crossIcon}
              alt="cross"
              onClick={() => {
                setNavShow(false);
              }}
            />
            <div className="flex justify-between mt-5 ">
              <div className="w-2/5 flex flex-col ml-36">
                <div>
                  <ul>
                    <Li extraLarge className="text-white mb-8">
                      Home
                    </Li>
                    <Li extraLarge className="text-white mb-8">
                      Blogs
                    </Li>
                    <Li extraLarge className="text-white mb-8">
                      News
                    </Li>
                  </ul>
                </div>
                <P className="text-white mb-6">Follow Us</P>
                <div className="flex ">
                  <SocialIcon />
                </div>
              </div>
              <div className="w-2/4 pt-12">
                <H extraLarge className="pb-8">
                  {" "}
                  Trending Blogs
                </H>
                <div className="flex justify-between">
                  <div>
                    <TrendingNavBlog />
                  </div>
                  <div>
                    <TrendingNavBlog />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavView;
