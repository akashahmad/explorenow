import React, { useEffect, useReducer, useRef } from "react";
import "../assets/styles/style.css";
import { useState } from "react";
import Layout from "../components/layout";
import CategoriesList from "../components/categoriesList";
import NewsSide from "../components/newsSide";
import FeaturedMain from "../components/FeaturedMain";
import RealEstate from "../components/realEstateSection";
import BeautyCategory from "../components/beautySection";
import HealthCategory from "../components/healthCategory";
import NavView from "../components/navView";

const IndexPage = ({ location }) => {
  let totalHeight = typeof window !== "undefined" && window.innerHeight;
  let scrollBodyRef = useRef(null);
  let menuRef = useRef(null);
  let currentIndex = 0;
  var scrollingDirection = 0;
  var lastScroll = 9999;
  var scrollIdleTime = 300;

  let sectionIds = [
    "beautyCategory",
    "healthCategory",
    "featuredCategory",
    "realEstate",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // document.getElementById(sectionIds[3]).scrollTop = 0;
      totalHeight = totalHeight - 32;
      totalHeight = totalHeight - menuRef.current.offsetHeight;
      scrollBodyRef.current.style.height = totalHeight + "px";
      scrollBodyRef.current.addEventListener("wheel", function (event) {
        var delta = event.deltaY;
        var timeNow = performance.now();
        if (
          delta > 0 &&
          (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
        ) {
          scrollHandler("down");

          scrollingDirection = 1;
        } else if (
          delta < 0 &&
          (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
        ) {
          scrollHandler("up");

          scrollingDirection = 2;
        }
        lastScroll = timeNow;
      });
    }
  }, []);
  const scrollHandler = (direction) => {
    if (direction === "down") {
      if (currentIndex !== sectionIds.length - 1) {
        sectionIds.forEach((section, sectionIndex) => {
          let item = document.getElementById(section);
          if (sectionIndex !== currentIndex + 1) {
            item.style.height = "0px";
          } else if (sectionIndex === currentIndex + 1) {
            item.style.height = "100vh";
          }
        });
        currentIndex = currentIndex + 1;
      }
    } else {
      if (currentIndex !== 0) {
        sectionIds.forEach((section, sectionIndex) => {
          let item = document.getElementById(section);
          if (sectionIndex !== currentIndex - 1) {
            item.style.height = "0px";
          } else if (sectionIndex === currentIndex - 1) {
            item.scrollTop = totalHeight;
            item.style.height = "100vh";
          }
        });
        currentIndex = currentIndex - 1;
      }
    }
  };

  return (
    <>
     <NavView/>
        <Layout headerRef={menuRef}>
          <div
          id="scrollSectionHeight"
            className="flex justify-between container mx-auto pt-4 pb-4 scrollSections pt-28 pb-16"
            ref={scrollBodyRef}
          >
            <CategoriesList />
            <div className="w-full pr-16" >
              <div className="section" id="beautyCategory">
                <BeautyCategory />
              </div>
              <div className="section" id="healthCategory">
                <HealthCategory />
              </div>
              <div className="section" id="featuredCategory">
                <FeaturedMain />
              </div>
              <div className="section" id="realEstate">
                <RealEstate />
              </div>
            </div>
            <NewsSide scrollHandler={scrollHandler} />
          </div>
        </Layout>
    </>
  );
};

export default IndexPage;
