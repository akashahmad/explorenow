import React from "react";
import { H, P,Img } from "@atoms";
import Layout from "../components/layout";
import { eye, clock, chat, deailHeroImage } from "@images";
import AddFull from "../components/addFull";
import Comments from "../components/comments";
import Form from "../components/form";
import LatestNews from "../components/newsSide/latestNews";
import RelatedBlog from "../components/relatedBlog";
import Newsletter from "../components/newsLetter";
import FindMore from "../components/findMore";
import SocialIcon from "../components/socialIcon";
const BlogSite = () => {
  return (
    <>
      <Layout>
        <div className=" container mx-auto py-12 flex justify-between">
          <div className=" w-9/12">
            <div
              style={{
                backgroundImage: `url(${deailHeroImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "390px",
              }}
            ></div>
            <div className="flex justify-center">
              <div className="w-1/4 mt-4">
                <SocialIcon />
              </div>
              <div>
                <H HeadingMainBlue className=" py-4">
                  FASHION
                </H>
                <H className=" pb-4" HeadingMainBlack>
                  {" "}
                  Mauris elementum leo accumsan tempor magna Mauris elementum
                  leo accumsan tempor magna
                </H>
                <div className="flex w-6/12 justify-between pb-8 items-center">
                  <P light>February 16,2020</P>
                  <P light> Updated : 3 days Ago</P>
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <Img src={clock} alt="clock" />
                    </div>
                    <div>
                      <P light>8 min read</P>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <Img src={chat} alt="chat" />
                    </div>
                    <div>
                      <P light>3</P>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <Img src={eye} alt="eye" />
                    </div>
                    <div>
                      <P light>247</P>
                    </div>
                  </div>
                </div>
                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>

                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>
                <H className="pb-4" HeadingMainBlack>
                  {" "}
                  Mauris elementum leo accumsan tempor magna
                </H>

                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>

                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>

                <H className="pb-4" HeadingMainBlack>
                  {" "}
                  Mauris elementum leo accumsan tempor magna
                </H>

                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>

                <P className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </P>
                <AddFull />
                <div className="pt-6">
                  <Comments />
                </div>
                <div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12 pl-12">
            <LatestNews />
            <FindMore />
            <RelatedBlog />
            <FindMore />
            <Newsletter />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default BlogSite;
