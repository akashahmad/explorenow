import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div className="flex justify-between items-center container mx-auto w-full pt-6">
      <div className="w-2/5">
        <StaticImage src="../../assets/images/icon.png" alt="nav-icon" />
      </div>
      <div className="w-1/4">
        <StaticImage src="../../assets/images/logo.png" alt="logo" />
      </div>
      <div className=" relative w-1/4">
        <input
          className="rounded-full border-2 shadow-sm pr-24 py-1 pl-3 outline-none w-full"
          placeholder="Search"
        ></input>
        <StaticImage
          className=" absolute right-4 top-3 opacity-80"
          src="../../assets/images/arrow.png"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Header;
