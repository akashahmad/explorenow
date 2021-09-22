import * as React from "react";
import "../assets/styles/style.css";
import Layout from "../components/layout";
import CategoriesList from "../components/categoriesList";
import NewsSide from "../components/newsSide";
import FeaturedMain from "../components/FeaturedMain";

const IndexPage = () => {
  return (
    <>
    <div className=" Usama h-screen ">
      <Layout >
        <div className="flex justify-between container mx-auto pt-16 pb-10">
            <CategoriesList />
            <FeaturedMain/>
            <NewsSide />
        </div>
      </Layout>
      </div>
      </>
  );
};

export default IndexPage;
