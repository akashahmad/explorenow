import * as React from "react";
import BlogList from "../components/blogList";
import Blogs from "../components/blogs/blogs";
import Ads2 from "../components/ads2";
import NewsLetter from "../components/newsLetter";
import Layout from "../components/layout";

const AllBlogs = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto py-5">
          <BlogList />
          <div className="flex">
            <Blogs />
            <div className="w-2/12">
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
