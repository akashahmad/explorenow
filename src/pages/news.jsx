import React from "react";
import "../assets/styles/style.css";
import Layout from "../components/layout";
import Ads2 from "../components/ads2";
import NewsLetter from "../components/newsLetter";
import NewsBlog from "../components/newsBlog";
import NavView from "../components/navView";
import { H } from "@atoms";
const News = () => {
  return (
    <>
      <NavView />
      <Layout>
        <div className="container mx-auto pt-28">
          <div className="font-bold py-2">
            <H HeadingMainBlue>News</H>
          </div>
          <div className="flex">
            <NewsBlog />
            <div className="w-2/12 relative -mt-10">
              <Ads2 />
              <NewsLetter />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default News;
