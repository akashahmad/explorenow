import * as React from "react";
import "../assets/styles/style.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import Layout from "../components/layout";
import CategoriesList from "../components/categoriesList";
import NewsSide from "../components/newsSide";
import FeaturedMain from "../components/FeaturedMain";
import RealEstate from "../components/realEstateSection";
import BeautyCategory from "../components/beautySection";
import HealthCategory from "../components/healthCategory";
import NewsletterFull from "../components/newsLetterFull";
import NavView from "../components/navView";

const IndexPage = () => {
  const [category, setCategory] = useState(true);

  return (
    <>
      <div className=" ">
        <Layout>
          <div className="flex justify-between container mx-auto pt-8 pb-4">
            <CategoriesList />
            <div className="w-full pr-16 ">
              <div className="section">
                <FeaturedMain />
              </div>
              <div className="section">
                <BeautyCategory />
              </div>
              <div className="section">
                <HealthCategory />
              </div>
              <div className="section">
                <RealEstate />
              </div>
            </div>
            <NewsSide />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default IndexPage;
