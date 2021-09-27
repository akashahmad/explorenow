import React from "react";
import { H, P } from "@atoms";
import Layout from "../components/layout";
import DetailHeroImage from "../assets/images/deailHeroImage.png";
import { eye, clock, chat , deailHeroImage } from "@images";
const BlogSite = () => {
  return (
    <>
      <Layout>
        <div className=" container mx-auto">
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

            <div className=" py-4">
              <H HeadingMainBlue>FASHION</H>
            </div>
            <div className=" pb-4">
              <H HeadingMainBlack>
                {" "}
                Mauris elementum leo accumsan tempor magna Mauris elementum leo
                accumsan tempor magna
              </H>
            </div>
            <div className="flex w-5/12 justify-between pb-8">
              <P light>February 16,2020</P>
              <P light> Updated : 3 days Ago</P>
              <P light>
                <img src={clock} alt="clock" />8 min read
              </P>
              <P light>
                <img src={chat} alt="chat" />3
              </P>
              <P light>
                <img src={eye} alt="eye" />3
              </P>
            </div>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </P>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </P>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default BlogSite;
