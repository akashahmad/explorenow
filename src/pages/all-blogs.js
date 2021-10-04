import * as React from "react";
import "../assets/styles/style.css";
import BlogList from "../components/blogList";
import Blogs from "../components/blogs/blogs";
import Ads2 from "../components/ads2";
import NewsLetter from "../components/newsLetter";
import Layout from "../components/layout";
import NavView from "../components/navView";

const AllBlogs = () => {
  return (
    <>
      <NavView />
      <Layout>
        <div className="container mx-auto py-5 pt-28">
          <BlogList />
          <div className="flex">
            <Blogs />
            <div className="relative -mt-10 w-2/12">
              <Ads2 />
              <NewsLetter />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllBlogs;
