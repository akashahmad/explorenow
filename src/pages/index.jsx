import * as React from "react";
import "../assets/styles/style.css";
import { useState } from "react";
import Layout from "../components/layout";
import CategoriesList from "../components/categoriesList";
import NewsSide from "../components/newsSide";
import FeaturedMain from "../components/FeaturedMain";
import RealEstate from "../components/realEstateSection";
import BeautyCategory from "../components/beautySection";
import HealthCategory from "../components/healthCategory";

const IndexPage = () => {
  const [category] = useState(true);

  return (
    <>
      <div className=" h-screen overflow-hidden ">
        <Layout>
          <div className="flex justify-between container mx-auto pt-8 pb-4">
            <CategoriesList />
            {!category ? <FeaturedMain /> : <HealthCategory/>}
            <NewsSide />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default IndexPage;
