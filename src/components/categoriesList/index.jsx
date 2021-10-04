import React from "react";
import { Link } from "gatsby";
import { H, Li } from "@atoms";
const CategoriesList = () => {
  return (
    <div className="w-1/5">
      <nav>
        <H className="pb-5">By Categories</H>
        <ul>
          <Link to="all-blogs">
            <Li>Beauty</Li>
          </Link>
          <Link to="all-blogs">
            <Li>Health</Li>
          </Link>
          <Link to="all-blogs">
            <Li>Fashion</Li>
          </Link>
          <Link to="all-blogs">
          <Li>Real Estate</Li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default CategoriesList;
