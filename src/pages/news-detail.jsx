import React from "react";
import "../assets/styles/style.css";
import { H, P } from "@atoms";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { eye, clock, chat, newsDetail } from "@images";
import AddFull from "../components/addFull";
import Ads2 from "../components/ads2";
import Newsletter from "../components/newsLetter";
import SocialIcon from "../components/socialIcon";
import NewsletterFull from "../components/newsLetterFull";
import NavView from "../components/navView";
const NewsDetail = () => {
  // const [showNewsLetter, setShowNewsLetter] = useState(true);
  // useEffect(() => {
  //   const closeNewsLetter = () => {
  //     setShowNewsLetter(false);
  //   };
  // }, []);

  // setTimeout(() => {
  //   setShowNewsLetter(true);
  // }, 2000);
  return (
    <>
    <NavView/>
      <Layout>
        <NewsletterFull />
        <div className="container mx-auto pt-28 flex justify-between h-screen ">
          <div className=" hide-scroll ain w-9/12 overflow-y-scroll ">
            <div className=" py-4 w-9/12">
              <H HeadingMainBlack>
                {" "}
                Mauris elementum leo accumsan tempor magna Mauris elementum leo
                accumsan tempor magna
              </H>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col  w-2/6 justify-between pb-8">
                <div className="flex justify-between pb-3">
                  <P light>February 16,2020</P>

                  <P light> Updated : 3 days Ago</P>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <img src={clock} alt="clock" />
                    </div>
                    <div>
                      <P light>8 min read</P>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <img src={chat} alt="chat" />
                    </div>
                    <div>
                      <P light>3</P>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="opacity-30">
                      <img src={eye} alt="eye" />
                    </div>
                    <div>
                      <P light>247</P>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <SocialIcon />
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${newsDetail})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "390px",
              }}
            ></div>
            <div className="flex justify-center">
              <div>
                <div className=" py-4">
                  <H HeadingMainBlack>
                    {" "}
                    Mauris elementum leo accumsan tempor magna Mauris elementum
                    leo accumsan tempor magna
                  </H>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
                <div className="pb-4">
                  <H HeadingMainBlack>
                    {" "}
                    Mauris elementum leo accumsan tempor magna
                  </H>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
                <div className="mx-16 py-8">
                  <AddFull />
                </div>
                <div className="pb-4">
                  <H HeadingMainBlack>
                    {" "}
                    Mauris elementum leo accumsan tempor magna
                  </H>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
                <div className="pb-4">
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12 pl-12">
            <Ads2 />
            <Newsletter />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default NewsDetail;
