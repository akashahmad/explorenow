import * as React from "react";
import { icon, logo, arrow } from "@images";
import { Img } from "@atoms";

const Header = ({ headerRef , setNavShow }) => {
  return (
    <div
      className="flex justify-between items-center container mx-auto w-full pt-6 absolute top-0 right-0 left-0
       z-10 bg-white "
      ref={headerRef}
    >
      <div className="w-2/5">
        <Img className=" cursor-pointer" src={icon} alt="nav-icon" onClick={()=>{setNavShow(true)}}/>
      </div>
      <div className="w-1/4">
        <Img src={logo} alt="logo" />
      </div>
      <div className=" relative w-1/4">
        <input
          className="rounded-full border-2 shadow-sm pr-24 py-1 pl-3 outline-none w-full"
          placeholder="Search"
        ></input>
        <div className=" absolute right-4 top-3 opacity-80">
          <Img className=" cursor-pointer" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
