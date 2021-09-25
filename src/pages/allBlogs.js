import * as React from "react";
import BlogList from "../components/blogList";
import Blogs from "../components/blogs/blogs";
import Ads_2 from "../components/ads_2";
import AddNews from "../components/addnews";
import  Layout  from "../components/layout";

const AllBlogs = () => {
  return (
    <>
    <Layout>
      <div className="container mx-auto py-5">
        <BlogList />
        <div className="flex">
          <Blogs />
          <div className="w-2/12">
            <Ads_2 />
            <AddNews />
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default AllBlogs;
