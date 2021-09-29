import React from "react";
import { Img, Li, P, H } from "@atoms";
import { crossIcon } from "@images";
import SocialIcon from "../socialIcon";
import TrendingNavBlog from "./trendingBlogNav";
const NavView = () => {
  return (
    <>
      <div className="bg-light-blue h-screen">
        <div className="container mx-auto">
          <Img className="ml-8 pt-8 cursor-pointer" src={crossIcon} alt="cross" />
          <div className="flex justify-between mt-5 ">
            <div className="ml-24">
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
            <div className="w-3/5 pt-12">
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
    </>
  );
};
export default NavView;
